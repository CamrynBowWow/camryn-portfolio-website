'use client';

import { convertFileToBase64 } from '@/lib/utils'; // Import the convertFileToBase64 function
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type FileUploaderProps = {
	files: string | undefined; // Now just a single Base64 string
	onChange: (file: string) => void; // onChange will receive a single string
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
	console.log('here2');
	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		// Convert the first file to Base64 and update the parent component
		if (acceptedFiles.length > 0) {
			const base64File = await convertFileToBase64(acceptedFiles[0]); // Convert the first file to Base64
			onChange(base64File); // Pass the Base64 string back to the parent component
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()} className='file-upload'>
			<input {...getInputProps()} />
			{files ? (
				<Image
					src={files} // Use the Base64 string as the image source
					width={500}
					height={500}
					alt='uploaded image'
					className='max-h-[200px] overflow-hidden object-contain'
				/>
			) : (
				<>
					<Image src='/icons/upload.svg' width={40} height={40} alt='upload' />
					<div className='file-upload_label'>
						<p className='text-14-regular'>
							<span className='text-green-500'>Click to upload</span> or drag and drop
						</p>
						<p>SVG, PNG, JPG or Gif (max 800x400)</p>
					</div>
				</>
			)}
		</div>
	);
};

export default FileUploader;
