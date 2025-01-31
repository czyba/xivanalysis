import {ActionKey} from 'data/ACTIONS'
import {StatusKey} from 'data/STATUSES'

// Forms
export const FORM_TIMEOUT_MILLIS = 30000

export const FORMS: StatusKey[] = [
	'OPO_OPO_FORM',
	'RAPTOR_FORM',
	'COEURL_FORM',
]

export const OPO_OPO_ACTIONS: ActionKey[] = [
	'BOOTSHINE',
	'DRAGON_KICK',
	'SHADOW_OF_THE_DESTROYER',
	'LEAPING_OPO',
]

export const RAPTOR_ACTIONS: ActionKey[] = [
	'TRUE_STRIKE',
	'TWIN_SNAKES',
	'FOUR_POINT_FURY',
	'RISING_RAPTOR',
]

export const COEURL_ACTIONS: ActionKey[] = [
	'SNAP_PUNCH',
	'DEMOLISH',
	'ROCKBREAKER',
	'POUNCING_COEURL',
]

export const FORM_ACTIONS: ActionKey[] = [
	...OPO_OPO_ACTIONS,
	...RAPTOR_ACTIONS,
	...COEURL_ACTIONS,
]

// Blitzes
export const BLITZ_ACTIONS: ActionKey[] = [
	'TORNADO_KICK',
	'ELIXIR_FIELD',
	'CELESTIAL_REVOLUTION',
	'FLINT_STRIKE',
	'RISING_PHOENIX',
	'PHANTOM_RUSH',
	'ELIXIR_BURST',
]
