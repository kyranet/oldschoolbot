import { Bank, SkillsEnum } from './types';

export type CustomGet<K extends string, TCustom> = K & { __type__: TCustom };

export function T<TCustom>(k: string): CustomGet<string, TCustom> {
	return k as CustomGet<string, TCustom>;
}

export namespace UserSettings {
	export const GP = T<number>('GP');
	export const Bank = T<Bank>('bank');
	export const Pets = T<Bank>('pets');
	export const CollectionLogBank = T<Bank>('collectionLogBank');
	export const MonsterScores = T<Bank>('monsterScores');
	export const ClueScores = T<Bank>('clueScores');
	export const LastDailyTimestamp = T<number>('lastDailyTimestamp');
	export const Badges = T<readonly number[]>('badges');
	export const RSN = T<string>('RSN');
	export const TotalCommandsUsed = T<number>('totalCommandsUsed');

	export namespace Stats {
		export const Deaths = T<number>('stats.deaths');

		export const DiceWins = T<number>('stats.diceWins');
		export const DiceLosses = T<number>('stats.diceLosses');

		export const DuelWins = T<number>('stats.duelWins');
		export const DuelLosses = T<number>('stats.duelLosses');
	}

	export namespace Minion {
		export const Name = T<string>('minion.name');

		export const HasBought = T<boolean>('minion.hasBought');
		export const DailyDuration = T<number>('minion.dailyDuration');
	}

	export namespace Skills {
		export const Mining = T<string>(`skills.${SkillsEnum.Mining}`);
	}
}
