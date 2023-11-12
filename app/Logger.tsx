// @ts-nocheck
"use client";

//import { FC, useEffect, useState, useRef } from "react";
import { FC } from "react";

interface gameInfoProps {
	data?: any;
	offerData?: any;
	productImageData?: any;
}

const Logger: FC<gameInfoProps> = ({ data }) => {
	console.log(data);

	return <></>;
};

export default Logger;
