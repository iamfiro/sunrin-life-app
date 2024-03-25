/* Represents the state of a competition. */
interface IFoodState {
    mealInfo: string;
    date: Date;
}

/**
 * Represents the type for the state of a competition.
 * It can be an array of `ICompetitionState` objects or an empty array.
 */
export type FoodStateType = IFoodState[] | [];