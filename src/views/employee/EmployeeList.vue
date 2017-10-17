<template>
	<div>
		<el-button-group style="margin-bottom:5px">
			<el-button type="primary" size="small" icon="plus" @click="loadData">添加</el-button>
			<el-button type="primary" size="small" icon="delete">批量删除</el-button>
		</el-button-group>

		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template scope="scope">
					<el-button @click="handleView(scope.row)" type="text" size="small">详情</el-button>
					<el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
					<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination style="margin-top:10px;padding-right:0px;" class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[20, 50, 100]" :page-size="20" layout="total, sizes, prev, pager, next" :total="400">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				currentPage: 4
			};
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			handleView(row) {},
			handleEdit(row) {},
			handleDelete(row) {},
			loadData() {
				alert('loading...');
				this.isLoading = true;
				this.$http({
					url: '/api/posts/1'
				}).then((response) => {
					this.isLoading = false;
					console.log(response.data);
				}).catch((error) => {
					this.isLoading = false;
					console.log(error)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>