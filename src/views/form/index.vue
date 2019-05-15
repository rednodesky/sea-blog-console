<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"/>
          <el-option label="Zone two" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="是否发布">
        <el-radio-group v-model="form.resource">
          <el-radio label="发布"/>
          <el-radio label="草稿"/>
        </el-radio-group>
      </el-form-item>

      <div>
        <tinymce :height="300" v-model="content"/>
      </div>

      <el-form-item class="submit-btn">
        <el-button type="primary" @click="onSubmit">新增</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>



    <!-- <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
      </el-col>
      <el-col :span="2" class="line">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;"/>
      </el-col>
    </el-form-item>
    -->

      <!--<el-form-item label="Activity type">-->
        <!--<el-checkbox-group v-model="form.type">-->
          <!--<el-checkbox label="Online activities" name="type"/>-->
          <!--<el-checkbox label="Promotion activities" name="type"/>-->
          <!--<el-checkbox label="Offline activities" name="type"/>-->
          <!--<el-checkbox label="Simple brand exposure" name="type"/>-->
        <!--</el-checkbox-group>-->
      <!--</el-form-item>-->

      <!--<el-form-item label="Activity form">-->
        <!--<el-input v-model="form.desc" type="textarea"/>-->
      <!--</el-form-item>-->


  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: { Tinymce },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      content: ''
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.submit-btn{
  margin-top: 20px;
  text-align: center;
}
</style>

