"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";

import { useState, useEffect, useRef } from "react";

const loading = () => {
  return <div>loading</div>;
};

export default loading;
