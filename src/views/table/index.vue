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
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="浏览次数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.viewCount }}
        </template>
      </el-table-column>
      <el-table-column label="点赞次数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.priseCount }}
        </template>
      </el-table-column>
      <el-table-column label="留言数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.commentCount }}
        </template>
      </el-table-column>
      <el-table-column label="是否置顶" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.stick }}
        </template>
      </el-table-column>
      <el-table-column label="预览图片" width="110" align="center">
        <template slot-scope="scope" >
          {{ scope.row.pic }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">

        <template  slot-scope="scope"  >
          <el-tag   v-if="scope.row.status == '1'" :type="scope.row.status | statusFilter">{{ '发布' }}</el-tag>
          <el-tag v-else :type="scope.row.status | statusFilter">{{ '草稿' }}</el-tag>
        </template>

      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  </div>
</template>

<script>
import { getList } from '@/api/table'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'gray',
//        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
          this.list = response.content
          this.total = response.totalElements
          this.listLoading = false
      }).catch(error => {
          this.listLoading = false
      })
    }
  }
}
</script>
