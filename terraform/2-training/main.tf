provider "aws" {
    region = "eu-west-3"
}

variable "vpcname" {
  type = string
  default = "challenge1"
}

resource "aws_vpc" "myvpc" {
    cidr_block = "192.168.0.0/24"
    tags = {
      "name" = var.vpcname
    }
}

