export class ObjectExt {
	/*
	* 从sourceObj对象将值设置到destObj
	*/
	public static SetFromOther(destObj:any,sourceObj:any,checkExist:boolean = true):void{
		Object.keys(sourceObj).forEach(key=>{
			if( (checkExist && destObj[key]) || !checkExist)
			{
				destObj[key] = sourceObj[key];
			}
		});
	}
}