/** ThikThak orders backend for Google Apps Script + Google Sheets.
 * Deploy as Web app: Execute as Me; access Anyone.
 * Change ADMIN_KEY before deployment and keep it private.
 */
const ADMIN_KEY = 'CHANGE-THIS-TO-A-LONG-RANDOM-SECRET';
const SHEET_NAME = 'Orders';
const HEADERS = ['Order ID','Created At','Name','Phone','Color','Size','Address','Area','Quantity','Unit Price','Product Total','Delivery Fee','Grand Total','Status'];
function sheet_(){
  const props=PropertiesService.getScriptProperties(); let id=props.getProperty('SPREADSHEET_ID');
  let ss=id?SpreadsheetApp.openById(id):SpreadsheetApp.create('ThikThak Website Orders');
  if(!id) props.setProperty('SPREADSHEET_ID',ss.getId());
  let sh=ss.getSheetByName(SHEET_NAME)||ss.insertSheet(SHEET_NAME);
  if(sh.getLastRow()===0) sh.appendRow(HEADERS);
  return sh;
}
function json_(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);}
function doPost(e){
  try{
    const d=JSON.parse((e.postData&&e.postData.contents)||'{}');
    if(d.action==='create'){
      const o=d.order||{};
      if(!o.name||!o.phone||!o.address||!o.size||!o.color||!o.area) return json_({ok:false,error:'Required fields missing'});
      const id='TT-'+Utilities.formatDate(new Date(),'Asia/Dhaka','yyMMdd-HHmmss')+'-'+Math.floor(100+Math.random()*900);
      sheet_().appendRow([id,new Date(),o.name,o.phone,o.color,o.size,o.address,o.areaText||o.area,Number(o.qty)||1,Number(o.unitPrice)||990,Number(o.productTotal)||990,Number(o.delivery)||0,Number(o.grandTotal)||0,'নতুন']);
      return json_({ok:true,orderId:id});
    }
    if(d.action==='update'){
      if(d.key!==ADMIN_KEY) return json_({ok:false,error:'Unauthorized'});
      const sh=sheet_(), rows=sh.getDataRange().getValues();
      const row=rows.findIndex((r,i)=>i>0&&String(r[0])===String(d.orderId));
      if(row<1) return json_({ok:false,error:'Order not found'});
      sh.getRange(row+1,14).setValue(String(d.status||'নতুন').slice(0,40));
      return json_({ok:true});
    }
    return json_({ok:false,error:'Unknown action'});
  }catch(err){return json_({ok:false,error:String(err)});}
}
function doGet(e){
  try{
    if(!e.parameter || e.parameter.action!=='list' || e.parameter.key!==ADMIN_KEY) return json_({ok:false,error:'Unauthorized'});
    const rows=sheet_().getDataRange().getDisplayValues();
    const orders=rows.slice(1).reverse().map(r=>({orderId:r[0],createdAt:r[1],name:r[2],phone:r[3],color:r[4],size:r[5],address:r[6],area:r[7],qty:r[8],unitPrice:r[9],productTotal:r[10],delivery:r[11],grandTotal:r[12],status:r[13]}));
    return json_({ok:true,orders});
  }catch(err){return json_({ok:false,error:String(err)});}
}
