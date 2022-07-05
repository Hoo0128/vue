<template>
  <div>
    <p>1. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" /> 
    <button>查询</button> 
    <p>2. 新增图书信息</p>
   
    <div> <input type="text" placeholder="书名" /> </div>
    
    <div><input type="text" placeholder="作者" /> </div>
   
    <div> <input type="text" placeholder="出版社" /> </div>
     <button>发布</button>  <br />
   
    <table border="1" width="700" style="border-collapse: collapse">
    
      <thead>
     
        <tr>
         
          <th>序列号</th>
       
          <th>书名</th>
        
          <th>作者</th>
       
          <th>出版社</th>
      
        </tr>
      
      </thead>
    
      <tbody>
      
        <tr>
       
          <td>1</td>
        
          <td>2</td>
        
          <td>3</td>

          <td>4</td>
       
        </tr>
      
      </tbody>

      <tfoot>

        <tr>

          <td></td>

          <td colspan="5"></td>
   
        </tr>

      </tfoot>

    </table>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
