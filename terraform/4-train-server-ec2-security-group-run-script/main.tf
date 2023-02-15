# define aws provider
provider "aws" {
    region = "eu-west-3"
}

# variable
variable "ingressrules" {
  type = list(number)
  default = [80,443]
}

variable "egressrules" {
type = list(number)
  default = [80,443]
}

# define eip
resource "aws_eip" "static_ip" {
 instance = aws_instance.db_small_ec2.id 
}

# define security group 
resource "aws_security_group" "https_http" {
  name = "Allow https/http"

  dynamic "ingress" {
    iterator = port
    for_each = var.ingressrules
    content {
      from_port = port.value
      to_port = port.value
      protocol = "TCP"
      cidr_blocks = [ "0.0.0.0/0" ]
    }
  }

  dynamic "egress" {
    iterator = jackouille
    for_each = var.egressrules
    content {
      from_port = jackouille.value
      to_port = jackouille.value
      protocol = "TCP"
      cidr_blocks = [ "0.0.0.0/0" ]
    }
  }
}

# init ec2-server
resource "aws_instance" "db_small_ec2" {
  ami = "ami-0ca5ef73451e16dc1"
  instance_type = "t2.micro"
  security_groups = [ aws_security_group.https_http.name ]
  tags = {
    "name" = "grosjack"
  }
  user_data = file("server-script.sh")
}

# run script
output "PrivateIP" {
    value = aws_instance.db_small_ec2.private_ip
}

output "PublicIP" {
    value = aws_eip.static_ip.public_ip
}
