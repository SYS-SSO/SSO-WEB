<!--
 * @Author: DuYa
 * @LastEditors: DuYa
 -->
<template>
  <div class="list">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="['name']" placeholder="姓名"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          搜索
        </a-button>
      </a-form-item>
    </a-form>
    <div class="mt10">
      <XTable :columns="column" :dataSource="dataSource" :pagination="pagination" @update="update"></XTable>
    </div>
  </div>
</template>

<script>
import XTable from "@/components/XTable";
import { column } from "./Config/UserListConfig";
import { FormatList } from "./Formats/UserFormat";
export default {
  name: "UserList",
  components: { XTable },
  data() {
    return {
      form: this.$form.createForm(this),
      column,
      dataSource: [],
      // 分页
      pagination: {
        pageSize: 10,
        current: 1,
        total: 0
      }
    };
  },
  mounted() {
    this.queryData();
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.queryData();
    },
    // 分页
    update(val) {
      this.pagination = {
        ...val
      };
      this.queryData();
    },
    queryData() {
      this.form.validateFields((err, values) => {
        this.$request.get("/users/getUserLs", {
          page: this.pagination.current,
          size: this.pagination.pageSize,
          ...values
        }).then(res => {
          if(res.code === 200) {
            this.dataSource = FormatList(res.body);
            this.pagination.total = res.page.allCount
          }
        });
      });
      
    }
  }
};
</script>

<style lang="less" scoped></style>
