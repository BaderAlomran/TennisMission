var express = require('express');
var router = express.Router();
var _function = require('../functions/function');



router.post('/', function(req, res, next) {
    var response=[];
  var algo ={
         NTRP:req.param('NTRP'),
		 NFUE:req.param('NFUE'),
		 NFFE:req.param('NFFE'),
		 NBUE:req.param('NBUE'),
		 NBFE:req.param('NBFE'),
		 OFUE:req.param('OFUE'),
		 OFFE:req.param('OFFE'),
		 OBUE:req.param('OBUE'),
		 OBFE:req.param('OBUE'),
		 DF:req.param('DF'),
		 FS_pct:req.param('FS_pct'),
		 FSW_pct:req.param('FSW_pct'),
		 FW:req.param('FW'),
		 BW:req.param('BW'),
		 PNW:req.param('PNW'),
		 PNL:req.param('PNL'),
		 PNLN:req.param('PNLN'),
		 PNLW:req.param('PNLW'),
		 OW:req.param('OW'),
		 OFE:req.param('OFE'),
		 OUE:req.param('OUE'),
         user_id:req.param('user_id'),
         result:response
  }



    if((algo.NBUE+algo.OBUE) >= (algo.OUE)){
       response.push({Message:_function.Backhand_Issue(algo.NBUE,algo.OBUE,algo.OBFE,algo.NBFE)});
}		

if (algo.NTRP>= 3.5 && algo.NTRP<=4){
                            
                var TEMP1 = ((algo.NFUE+algo.OFUE)/algo.FW+algo.OFE);
                              
				if (TEMP1 > 1.2){
                    response.push({Message:_function.Forehand_Issue(algo.NFUE,algo.OFUE,algo.NFFE,algo.OFFE,algo.OW,algo.OUE,algo.FW,algo.OFE)});
                }
                     
        }//ENDED

			else if (algo.NTRP>4 && algo.NTRP<5){

                               var TEMP2 = (algo.NFUE+algo.OFUE)/(algo.FW+algo.OFE);
				if (TEMP2>1){
                        response.push({Message:_function.Forehand_Issue(algo.NFUE,algo.OFUE,algo.NFFE,algo.OFFE,algo.OW,algo.OUE,algo.FW,algo.OFE)});
                }
                              		  
                        }//ENDED
			
			else if (algo.NTRP>=5 && algo.NTRP<6){//STARTED
                                var TEMP3 = (algo.NFUE+algo.OFUE)/(algo.FW+(algo.OFE/2));
				if (TEMP3>1)
					{
                         response.push({Message:_function.Forehand_Issue(algo.NFUE,algo.OFUE,algo.NFFE,algo.OFFE,algo.OW,algo.OUE,algo.FW,algo.OFE)});
                    }
                        }//ENDED
                               var  TEMP4 = (algo.NFUE+algo.OFUE)/algo.FW;
				if (TEMP4>1)
					{
                         response.push({Message:_function.Forehand_Issue(algo.NFUE,algo.OFUE,algo.NFFE,algo.OFFE,algo.OW,algo.OUE,algo.FW,algo.OFE)});
                    }//ENDED	
		//Serve
			if (algo.NTRP>= 3.5 && algo.NTRP<=4)//STARTED
			{
                                
				if (algo.FS_pct< 35)
                {
                    response.push({Message:_function.First_Serve_Doesnt_Go_In()});
                }
					
				if (algo.FSW_pct<54)
                {
                    response.push({Message:_function.First_Serve_Isnt_Effective()});
                }
				if (algo.DF>5)
                {
                        response.push({Message:_function.Double_Fault()});      
                }
					
			}//ENDED
				
			else if (algo.NTRP>4 && algo.NTRP<5)//SARTED
			{
				if (algo.FS_pct< 40)
                {
                   response.push({Message:_function.First_Serve_Doesnt_Go_In()});
                }
				if (algo.FSW_pct<58)
                {
                   response.push({Message:_function.First_Serve_Isnt_Effective()}); 
                }
				if (algo.DF>4)
                {
                   response.push({Message:_function.Double_Fault()});
                }
			} //ENDED
                        else if ((algo.NTRP>=5) && (algo.NTRP<6))//STARTED
			{
				if (algo.FS_pct< 45)
                {
                    response.push({Message:_function.First_Serve_Doesnt_Go_In()}); 
                }
				if (algo.FSW_pct<63)
                {
                    response.push({Message:_function.First_Serve_Isnt_Effective()});
                }
				if (algo.DF>3)
                {
                    response.push({Message:_function.Double_Fault()});
                }
			}//ENDED
			else//STARTED
			{
				if (algo.FS_pct< 50)
                {
                   response.push({Message:_function.First_Serve_Doesnt_Go_In()});
                }
				if (algo.FSW_pct<68)
                {
                    response.push({Message:_function.First_Serve_Isnt_Effective()});
                }
				if (algo.DF>2)
                {
                   response.push({Message:_function.Double_Fault()});
                }
			}	//ENDED
		//Volleys
			if ((algo.NTRP>= 3.5) && (algo.NTRP<=4))//STARTED
			{
                                var TEMP5 = (algo.PNL/algo.PNW);
				if (TEMP5<0.51)
                {
                   response.push({Message:_function.volley(algo.PNLN,algo.PNLW)});
                }
					
			}//ENDED
			else if ((algo.NTRP>4) && (algo.NTRP<5))//STARTED
			{
                                var TEMP6 = (algo.PNL/algo.PNW);
				if (TEMP6<55)
                {
                   response.push({Message:_function.volley(algo.PNLN,algo.PNLW)}); 
                }
			}//ENDED
			else if ((algo.NTRP>=5) && (algo.NTRP<6))//STARTED
			{
                                TEMP7 = (algo.PNL/algo.PNW);
				if (TEMP7<60)
                {
                   response.push({Message:_function.volley(algo.PNLN,algo.PNLW)});
                }
					
				
			}//ENDED
			else//STARTED
			{
                                TEMP8 = (algo.PNL/algo.PNW);
				if (TEMP8<65)
                {
                   response.push({Message:_function.volley(algo.PNLN,algo.PNLW)});
                }
					 
			}	//ENDED
            algo.result=response;
            _function.saveresponse(algo).then((resp)=>{
                    res.send(response);
            }).catch(err=>{
                res.status(500).json(err).end();
            });
});



module.exports = router;
