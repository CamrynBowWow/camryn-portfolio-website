'use client';

import { MAX_FILE_SIZE_MB } from '@/data/constants';
import { convertFileToBase64 } from '@/lib/utils';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type FileUploaderProps = {
	files: string | undefined;
	onChange: (file: string) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
	const [error, setError] = useState<string | null>(null);

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			if (acceptedFiles.length === 0) return;

			const file = acceptedFiles[0];

			if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
				setError('File size must be less than 1MB.');
				onChange('');
				return;
			}

			setError(null);
			const base64File = await convertFileToBase64(file);
			onChange(base64File);
		},
		[onChange]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()} className='file-upload'>
			<input {...getInputProps()} />
			{error && <p className='text-red-500 text-sm'>{error}</p>}
			{files ? (
				<Image
					src={files}
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
						<p>SVG, PNG, JPG or Gif</p>
					</div>
				</>
			)}
		</div>
	);
};

export default FileUploader;
