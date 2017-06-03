var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId();
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = mongoose.Schema({
    User_id:{
         type: ObjectId
    },
    NTRP:{
         type: Number
    },
    NFUE:{
         type: Number
    },
    NFFE:{
         type: Number
    },
	NBUE:{
         type: Number
    },
    NBFE:{
         type: Number
    },
	OFUE:{
         type: Number
    },
	OFFE:{
         type: Number
    },
    OBUE:{
         type: Number
    },
    OBFE:{
         type: Number
    },
    DF:{
         type: Number
    },
	FS_pct:{
         type: Number
    },
    FSW_pct:{
         type: Number
    },
	FW:{
         type: Number
    },
	BW:{
         type: Number
    },
	PNW:{
         type: Number
    },
	PNL:{
         type: Number
    },
	PNLN:{
         type: Number
    },
	PNLW:{
         type: Number
    },
    OW:{
         type: Number
    },
	OFE:{
         type: Number
    },
	OUE:{
         type: Number
    },
    result:{
        type: Array
    }
});

module.exports = mongoose.model('algorithm', userSchema);
