provider "aws" {
  region = "eu-west-3"
}
variable "inputvar" {
  type = string
  description = "set the name of jackouille"
}

variable "vpcname" {
  type = string
  default = "jackouille"
}

resource "aws_vpc" "myvpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "name" = var.inputvar
  }
}

output "vpcid" {
 value = aws_vpc.myvpc.id 
}