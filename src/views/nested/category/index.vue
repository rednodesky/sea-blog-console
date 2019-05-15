<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.categoryId }}
        </template>
      </el-table-column>
      <el-table-column label="分类名称" width="110">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="分类说明"  align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.memo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="文章数" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.blogCount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="首页图片" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.image }}
        </template>
      </el-table-column>

      <!--<el-table-column class-name="status-col" label="Status" width="110" align="center">-->
      <!--<template slot-scope="scope">-->
      <!--<el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column align="center" prop="created_at" label="Display_time" width="200">-->
      <!--<template slot-scope="scope">-->
      <!--<i class="el-icon-time"/>-->
      <!--<span>{{ scope.row.display_time }}</span>-->
      <!--</template>-->
      <!--</el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  import { getList } from '@/api/category'

  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response
          this.listLoading = false
        }).catch(error => {
          this.listLoading = false
        })
      }
    }
  }
</script>
