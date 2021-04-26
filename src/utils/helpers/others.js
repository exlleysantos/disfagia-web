export const renderLocaleWeeklySchedule = (weeklySchedule) => {
	const { sunday, saturday, ...weekMid } = weeklySchedule;
	const weekend = { sunday, saturday };

	const isWeekendOnly = (verifyMid = true) => {
		for (const day in weekend) {
			if (!weekend[day]) {
				return false;
			}
		}

		if (verifyMid) {
			for (const day in weekMid) {
				if (weekMid[day]) {
					return false;
				}
			}
		}

		return true;
	};

	const isMidWeekOnly = () => {
		for (const day in weekMid) {
			if (!weekMid[day]) {
				return false;
			}
		}

		return true;
	};

	let weekendOnly = true;
	let weekMiddleOnly;

	const entireWeek = isWeekendOnly(false) && isMidWeekOnly();

	if (entireWeek) {
		return 'Todos os dias da semana';
	}

	weekendOnly = isWeekendOnly();

	if (weekendOnly) {
		return 'Somente finais de semana';
	}

	weekMiddleOnly = isMidWeekOnly();

	if (weekMiddleOnly) {
		return 'De Segunda a Sexta';
	}

	let daysQuantity = 0;

	for (const day in weeklySchedule) {
		if (weeklySchedule[day]) {
			daysQuantity++;
		}
	}

	if (daysQuantity === 1) {
		for (const day in weeklySchedule) {
			if (weeklySchedule[day]) {
				switch (day) {
					case 'sunday':
						return 'Somente aos Domingos';
					case 'monday':
						return 'Somente na Segunda-Feira';
					case 'tuesday':
						return 'Somente na Terça-Feira';
					case 'wednesday':
						return 'Somente na Quarta-Feira';
					case 'thursday':
						return 'Somente na Quinta-Feira';
					case 'friday':
						return 'Somente na Sexta-Feira';
					default:
						return 'Somente aos Sábados';
				}
			}
		}
	}

	return `${daysQuantity} dias por semana`;
};

export const toPTBRLocaleDay = (day) => {
	switch (day) {
		case 'sunday':
			return 'Dom';
		case 'monday':
			return 'Seg';
		case 'tuesday':
			return 'Ter';
		case 'wednesday':
			return 'Qua';
		case 'thursday':
			return 'Qui';
		case 'friday':
			return 'Sex';
		default:
			return 'Sab';
	}
};
