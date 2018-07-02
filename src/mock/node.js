const List = [{"name":"122.113.5.62",
			"labels":{"beta.kubernetes.io/arch":"amd64","beta.kubernetes.io/os":"linux",
			"kubernetes.io/hostname":"122.113.5.52"},"ready":"True","diffTime":"19天前",
			"createTime":"2018-05-25 16:11:46","nodeIP":"122.113.5.52"},
{"name":"122.113.5.63",
			"labels":{"beta.kubernetes.io/arch":"amd64","beta.kubernetes.io/os":"linux",
			"kubernetes.io/hostname":"122.113.5.52"},"ready":"True","diffTime":"19天前",
			"createTime":"2018-05-25 16:11:46","nodeIP":"122.113.5.52"},
{"name":"122.113.5.64",
			"labels":{"beta.kubernetes.io/arch":"amd64","beta.kubernetes.io/os":"linux",
			"kubernetes.io/hostname":"122.113.5.52"},"ready":"True","diffTime":"19天前",
			"createTime":"2018-05-25 16:11:46","nodeIP":"122.113.5.52"}];

export default {
	node: config => {


		return {
			code: 200,
			data: List
		}
	}
}
