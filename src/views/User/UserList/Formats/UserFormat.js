import { Divide, FormatTime } from "@/utils";
export function FormatList(arr = []) {
	return arr.map(res => {
		return {
			uuid: res.id,
			name: res.userName,
			sex: Divide(res.sex),
			blob: Divide(res.blogUrl),
			desc: Divide(res.desc),
			createTime: FormatTime(res.createTime),
			role: Divide(res.role),
			address: Divide(res.Divide)
		}
	})
};