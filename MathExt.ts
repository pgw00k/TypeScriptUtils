
export class MathExt {
	static Clamp(l : number, r : number, v : number) : number {
		if (v > r) {
			return r;
		} else if (v < l) {
			return l;
		}

		return v;
	}
	
	static RandomInt(min: number, max: number) {
	    return Math.floor(Math.random() * (max - min) ) + min;
	}
	
	static Random(min: number, max: number){
		return Math.random() * (max - min)  + min;
	}
}