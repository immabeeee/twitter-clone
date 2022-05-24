export class TweetsQuery {
    static readonly defaultTake: number = 20;
    static readonly defaultSkip: number = 0;

    public take: number;
    public skip: number;

    constructor(take: number, skip: number) {
        this.take = take;
        this.skip = skip;
    }

    reset(): TweetsQuery {
        return new TweetsQuery(TweetsQuery.defaultTake, TweetsQuery.defaultSkip);
    }


    update(take: number, skip: number): TweetsQuery {
        return new TweetsQuery(take, skip);
    }

    nextPage(): TweetsQuery {
        const take = +this.take + +TweetsQuery.defaultTake;
        return new TweetsQuery(take, this.skip);
    }
}


export const generateDefaultTweetsQuery = () => {
    return new TweetsQuery(TweetsQuery.defaultTake, TweetsQuery.defaultSkip);
};
