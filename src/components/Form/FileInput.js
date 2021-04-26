import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactAvatar from 'react-avatar';
import { useField } from '@unform/core';
import { AiOutlineUpload } from 'react-icons/ai';

import { FileInputContainer, FileInputOverlay } from './styles';

import { limitStringSize } from '../../utils/helpers/strings';

const FileInput = ({
	name,
	label,
	size,
	accept,
	showPreview,
	previewSize,
	previewName,
	overlayIcon: OverlayIcon,
	overlayText,
	...rest
}) => {
	const inputRef = useRef(null);

	const { fieldName, registerField, defaultValue, error } = useField(name);
	const [preview, setPreview] = useState(defaultValue);
	const [showOverlay, setShowOverlay] = useState(false);

	const validateFileType = useCallback(
		(fileType) => {
			if (!accept) {
				return true;
			}

			accept.forEach((type) => {
				if (!fileType.includes(type)) {
					return true;
				}
			});

			return false;
		},
		[accept]
	);

	const handlePreview = useCallback(
		(e) => {
			const toByteNotation = (value) => {
				const size = (value / 1000000).toFixed(1);

				if (size < 1) {
					return `${(size * 100).toFixed(1)}KB`;
				}

				return `${size}MB`;
			};

			const file = e.target.files?.[0];

			if (!file) {
				return setPreview(null);
			}

			const isFileTypeInvalid = validateFileType(file.type);

			if (isFileTypeInvalid) {
				inputRef.current.value = '';
				setPreview(null);
				return alert('Tipo de arquivo inválido');
			}

			if (showPreview) {
				return setPreview(URL.createObjectURL(file));
			}

			return setPreview({
				name: file.name,
				size: toByteNotation(file.size),
				type: file.type,
			});
		},
		[showPreview, validateFileType]
	);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'files[0]',
			clearValue(ref) {
				ref.value = '';
				setPreview(null);
			},
			setValue(_, value) {
				setPreview(value);
			},
		});
	}, [fieldName, registerField]);

	if (showPreview) {
		return (
			<FileInputContainer
				showPreview
				size={size}
				error={error}
				onClick={() => inputRef.current.click()}
				className='__input'
				onMouseOver={() => setShowOverlay(true)}
				onMouseOut={() => setShowOverlay(false)}>
				<ReactAvatar src={preview} size={previewSize} name={previewName} />

				<input {...rest} onChange={handlePreview} ref={inputRef} type='file' />
				<FileInputOverlay show={showOverlay} size={previewSize}>
					{OverlayIcon && <OverlayIcon />}
					{overlayText && <span>{overlayText}</span>}
				</FileInputOverlay>
			</FileInputContainer>
		);
	}

	return (
		<FileInputContainer
			size={size}
			error={error}
			onClick={() => inputRef.current.click()}
			className='__input'>
			<AiOutlineUpload />
			{label && (
				<label htmlFor={name}>
					{preview ? `${limitStringSize(preview.name, 15)} / ${preview.size}` : label}
				</label>
			)}

			<input {...rest} onChange={handlePreview} ref={inputRef} type='file' />
		</FileInputContainer>
	);
};

export default FileInput;
