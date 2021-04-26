import moment from 'moment';

export const diff = (start) => {
	const now = moment(new Date());
	const end = moment(start);
	const duration = moment.duration(now.diff(end));

	let diff = duration.asDays();
	let period = 'dia';

	if (diff < 1) {
		period = 'hora';
		diff = duration.asHours();

		if (diff < 1) {
			period = 'minuto';
			diff = duration.asMinutes();

			if (diff < 1) {
				period = 'segundo';
				diff = duration.asSeconds();

				if (diff < 1) {
					period = 'agora';
					diff = '';
				}
			}
		}
	}

	period = period.includes('agora') ? period : Math.round(diff) === 1 ? period : `${period}s`;

	return `${Math.round(diff) !== 0 ? Math.round(diff) : ''} ${period} ${
		!period.includes('agora') ? 'atrás' : 'mesmo'
	}`;
};
