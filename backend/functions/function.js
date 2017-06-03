var User = require('../models/user');
var Algorithm = require('../models/algorithm');
// const Algorithm = mongoose.connection.db.collection('algorithm');

module.exports = {
    Backhand_Issue: function (NBUE, OBUE , OBFE, NBFE) {
        var response='';
          var elsepointer = 0;
                var abc = NBUE/OBUE;
		if (abc >0.7){//STARTED
            elsepointer = 1;
            response +="Backhand not high enough above the net, needs to be more secure - Try bending your knees more";
			// return Promise.resolve(xyz);
                        }//ENDED
                abc = NBFE/OBFE; //OBFE was OFE;
		if (abc>1){//STARTED //--check ratio, Net forced error/Opp forced error
            elsepointer = 1;
            response +="Backhand - Not preparing quick enough";
			// return Promise.resolve(xyz);
                        }//ENDED
		abc = OBUE/NBUE;
                if (abc>1.8){
                    response += "Backhand - Need to generate more topspin";
                    // return  Promise.resolve(xyz);                
                }
              
                else if (elsepointer == 0){
			        response += "Backhand - Need to be more consistent, nothing specific";
                    // return  Promise.resolve(xyz); 
                }
                return  response;  
    },

     newUser: function (data) {
        var _user = new User({
            username: data.username,
            email: data.email,
            password: data.password,
            selection:data.selection,
            city:data.city
        });
        
        return _user.save().then(u => {
            if (!u) {
                var err = new Error();
                err.status = 500;
                err.message = "Error Occured";
                return Promise.reject(err);
            }

            return Promise.resolve(u);
        });
    },

     saveresponse: function (data) {
        // var _Algorithm = new Algorithm({
        //  NTRP:data.NTRP,
		//  NFUE:data.NFUE,
		//  NFFE:data.NFFE,
		//  NBUE:data.NBUE,
		//  NBFE:data.NBFE,
		//  OFUE:data.OFUE,
		//  OFFE:data.OFFE,
		//  OBUE:data.OBUE,
		//  OBFE:data.OBFE,
		//  DF:data.DF,
        //  FS_pct:data.FS_pct,
		//  FSW_pct:data.FSW_pct,
		//  FW:data.FW,
        //  BW:data.BW,		
        //  PNW:data.PNW,
		//  PNL:data.PNL,
		//  PNLN:data.PNLN,
		//  PNLW:data.PNLW,
		//  OW:data.OW,
        //  OFE:data.OFE,
		//  OUE:data.OUE,
        //  User_id:data.user_id,
        //  result:data.response      
        //  });
        
        return Algorithm.update({"User_id":data.user_id},{$set:data},{upsert:true}).then(u => {
            if (!u) {
                var err = new Error();
                err.status = 500;
                err.message = "Error Occured";
                return Promise.reject(err);
            }

            return Promise.resolve(u);
        });
    },

    get: function (email , password) {
        return User.find({ $and: [ { email: { $eq: email } }, { password: { $eq: password }  } ] } ).then(u => {
            if (u.length==0) {
                var err = new Error();
                err.status = 500;
                err.message = "Error Occured";
                return Promise.reject(err);
            }
            return Promise.resolve(u);
        });
    },

	Forehand_Issue: function(NFUE,OFUE,NFFE,OFFE,OW,OUE,FW,OFE)
	{
                var  TEMP; 
                var response='';
                var  elsepointer = 0;
		if ((NFUE/OFUE)>0.6){//STARTED
            elsepointer = 1;
			response +="Forehand - not high enough above the net, needs to be more secure - Try bending your knees more";
            // return Promise.resolve(abc);
                }//ENDED
		TEMP = NFFE/OFFE; //OFFE was OFE;
                if (TEMP>1){//STARTED   //--check ratio, Net forced error/Opp forced error
                     elsepointer = 1;
			response +="Forehand - Not preparing quick enough";
            // return Promise.resolve(abc);
                       }//ENDED
                TEMP = (OW + NFFE +OFFE)/(OUE+FW+OFE);//Basically if opps aggressiveness is more than his unforced erros + your aggressiveness-> >1
                if (TEMP>1){//STARTED
                    elsepointer = 1;
                    response +="Forehand - Not aggressive enough";
                    // return Promise.resolve(abc);
                    }//ENDED
                TEMP = OFUE/NFUE;
                if (TEMP>1.8)
                {
                    response += "Forehand - Need to add more topspin.";
                    //  return Promise.resolve(abc);
                }
                else if (elsepointer == 0)
                {
                    response +="Forehand - Need to be more consisten, nothing specific.";
                    // return Promise.resolve(abc);
                }
                return response;
	},

    First_Serve_Doesnt_Go_In: function()
	{
		var abc ="First Serve not reliable enough";
        return abc;
	},

    First_Serve_Isnt_Effective: function()
	{
		var abc = "First Serve not effective enough";
         return abc;
	},

	Double_Fault: function()
	{
		var abc = "Second serve too risky";
        return abc;
	},
    
	volley: function(PNLN,PNLW)
	{
		if (PNLN > PNLW)
        {
            var abc ="Volley skills need improvement";
            return abc;
        }
			
		else{
            var abc = "Approach shots has to be more aggresive";
            return abc;
	}
        }
}

