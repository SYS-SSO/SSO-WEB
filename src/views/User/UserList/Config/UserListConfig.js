export const column = [
	{
	  title: "UUID",
	  dataIndex: "uuid",
	  width: 100,
	  scopedSlots: { customRender: "uuid" }
	},
	{
	  title: "姓名",
	  dataIndex: "name",
	  width: 200,
	  scopedSlots: { customRender: "name" }
	},
	{
	  title: "自我描述",
	  dataIndex: "desc",
	  width: 300,
	  scopedSlots: { customRender: "desc" }
	},
	{
	  title: "角色",
	  dataIndex: "role",
	  width: 160
	},
	{
	  title: "博客地址",
	  dataIndex: "blob",
	  width: 100
	},
	{
	  title: "联系地址",
	  dataIndex: "address",
	  width: 200
	},
	{
	  title: "注册时间",
	  dataIndex: "createTime",
	  width: 160
	}
];