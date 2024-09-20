
export class JsonExt {
	static DeepParseObject(obj) :any {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
              try {
                // 尝试解析字符串，若成功，递归处理
                obj[key] = JSON.parse(obj[key]);
                JsonExt.DeepParseObject(obj[key]);
              } catch (e) {
                // 解析失败，说明它不是有效的 JSON 字符串
                continue;
              }
            }
          }
        return obj;
	}

    static DeepParse(rawJsonString:string):any {
        let obj = JSON.parse(rawJsonString);
        return JsonExt.DeepParseObject(obj);
    }
}