provider "aws" {
    region = "eu-west-3"
}

variable "ingressrules" {
    type = list(number)
    default = [80,443]
}

variable "egressrules" {
    type = list(number)
    default = [80,443,25,3306,53,8080]
}

resource "aws_instance" "ec2" {
  ami = "ami-0ca5ef73451e16dc1"
  instance_type = "t2.micro"
  security_groups = [ aws_security_group.web_traffic.name,
                    aws_security_group.webtrafficloop.name ]
  tags = {
    "name" = "jackouille"
  }
}

resource "aws_eip" "publicip" {
  instance = aws_instance.ec2.id
}

resource "aws_security_group" "web_traffic" {
    name = "alloz https"
    ingress {
      cidr_blocks = [ "0.0.0.0/0" ]
      description = "https"
      from_port = 443
      protocol = "TCP"
      to_port = 443
    }

    egress {
      cidr_blocks = [ "0.0.0.0/0" ]
      description = "https"
      from_port = 443
      protocol = "TCP"
      to_port = 443
    }
}

output "public_ip" {
    value = aws_eip.publicip.public_ip
}

output "ec2_ip" {
    value = aws_instance.ec2.public_ip
}

resource "aws_security_group" "webtrafficloop" {
    name = "Allow HTTPS loop"

    dynamic "ingress" {
        iterator = port 
        for_each = var.ingressrules
        content {
        from_port = port.value
        to_port = port.value
        protocol = "TCP"
        cidr_blocks = ["0.0.0.0/0"]
        }
    }

    dynamic "egress" {
        iterator = port 
        for_each = var.egressrules
        content {
        from_port = port.value
        to_port = port.value
        protocol = "TCP"
        cidr_blocks = ["0.0.0.0/0"]
        }
    }
}