//添加高亮提示
$($("#left_nav").children("a").get(1)).addClass("active");

function Supplier_manage(){
	this.createDom();
}

Supplier_manage.navTemplate = `
			<div class="please_login hide">
        <div class="col-md-9">
            <ul class="list-group">
                <p class="list-group-item active">功能详情</p>
                <div class="list-group-item">
                    <img src="imgs/clock.jpg">
                    <p>欢迎来到超市账单管理系统，请<a href="html/Login.html">登录</a>！</p>
                </div>
            </ul>
        </div>
    </div>

    <div class="right-content">
    	<div class="col-md-9">
    		<div class="list-group">
    			<p class="list-group-item list_title">
    				<img src="/imgs/home.png">
    				你现在所在的位置是:<span class="text-primary"> 供应商管理界面</span>
    			</p>
    		</div>
    		<div class="form-inline list-group manage_select">
			    <label for="exampleInputName2">供应商名称:</label>
			    <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入供应商的名称">
				<button type="button" class="btn btn-success"><img src="/imgs/search.png">查询</button>
				<button type="button" class="btn btn-primary"><img src="/imgs/tianjia.png">添加供应商</button>
    		</div>
    		<div class="manage_table">
    			<table class="table table-bordered table-hover text-center">
    				<thead class="bolder">
    					<td>供应商编号</td>
    					<td>供应商名称</td>
    					<td>联系人</td>
    					<td>联系电话</td>
    					<td>联系地址</td>
    					<td>传真</td>
    					<td>创建时间</td>
    					<td>操作</td>
    				</thead>
    				<tbody>
    					<tr>
    						<td>供应商编号</td>
	    					<td>供应商名称</td>
	    					<td>联系人</td>
	    					<td>联系电话</td>
	    					<td>联系地址</td>
	    					<td>传真</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>供应商编号</td>
	    					<td>供应商名称</td>
	    					<td>联系人</td>
	    					<td>联系电话</td>
	    					<td>联系地址</td>
	    					<td>传真</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>供应商编号</td>
	    					<td>供应商名称</td>
	    					<td>联系人</td>
	    					<td>联系电话</td>
	    					<td>联系地址</td>
	    					<td>传真</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>供应商编号</td>
	    					<td>供应商名称</td>
	    					<td>联系人</td>
	    					<td>联系电话</td>
	    					<td>联系地址</td>
	    					<td>传真</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>供应商编号</td>
	    					<td>供应商名称</td>
	    					<td>联系人</td>
	    					<td>联系电话</td>
	    					<td>联系地址</td>
	    					<td>传真</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    				</tbody>
    			</table>
    		</div>
    		<div class="page_change">	
				<ul class="pagination">
				    <li class="disabled"><a href="#">&laquo</a></li>
				    <li class="active"><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">&raquo;</a></li>
				</ul>
    		</div>
    	</div>
    </div>
`;


$.extend(Supplier_manage.prototype,{
	createDom(){
		$(Supplier_manage.navTemplate).appendTo("article");
	},
	changeLeftActive(){
		//添加高亮提示
		$($("#left_nav").children("a").get(1)).addClass("active");
	}
});

new Supplier_manage();
