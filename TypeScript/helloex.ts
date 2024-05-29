#!/usr/bin/env ts-node
import {hello, helloES} from "./helloes";
import defaultHello from "./helloes";
import * as Bundle from "./helloes";
import {welcome} from "./welcome";
hello("World");
helloES("Mundo");
defaultHello("World");
Bundle.hello("World");
Bundle.helloES("Mundo");
welcome("Mundo");
