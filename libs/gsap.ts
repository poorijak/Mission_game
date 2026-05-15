"use client";

import gsap from "gsap";
import { InertiaPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, InertiaPlugin);

export default gsap;
