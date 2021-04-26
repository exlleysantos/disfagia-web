export const getButtonColor = (color, variant, property) => {
	if (variant === 'outlined') {
		if (property === 'bg') {
			return 'transparent';
		} else {
			return `var(--${color})`;
		}
	} else {
		if (property === 'bg' || property === 'border') {
			return `var(--${color})`;
		} else {
			return `#FFFFFF`;
		}
	}
};

export const getButtonColorOnHover = (color, variant, property) => {
	if (variant === 'outlined') {
		if (property === 'bg' || property === 'border') {
			return `var(--${color})`;
		} else {
			return '#FFFFFF';
		}
	} else {
		if (property === 'bg' || property === 'border') {
			return `var(--${color}-hover)`;
		} else {
			return `#FFFFFF`;
		}
	}
};