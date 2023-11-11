const express=require('express')
const {generateSharingLink,disableSharing,retrievePublicMoodHistory}=require('../controllers/moodSharing');
const verifyToken = require('../middlewares/verifyToken');
const logMoodEntry = require('../controllers/moodLogEntry');
const updateMoodEntry = require('../controllers/updateMoodEntry');
const deleteMoodEntry = require('../controllers/deleteMoodEntry');
const emojiStatistics = require('../controllers/emojiStatistics');
const chronologicalSorting = require('../controllers/chronologicalSorting');
const emojiSuggestions = require('../controllers/emojiSuggestions');
const monthlySummary = require('../controllers/monthlySummary');
const publicMoodBoard = require('../controllers/publicMoodboard');
const rangeFiltering = require('../controllers/rangeFiltering');
const router=express.Router()

router.post('/',verifyToken,logMoodEntry);

router.put('/:id',verifyToken,updateMoodEntry);

router.delete('/:id',verifyToken,deleteMoodEntry);

router.get('/emoji-statistics/:userId',emojiStatistics);

router.get('/sorting',verifyToken,chronologicalSorting);

router.get('/filtering',verifyToken,rangeFiltering)

router.post('/emoji-suggestion',emojiSuggestions);

router.get('/monthly-summary',verifyToken,monthlySummary);

router.get('/public-mood-board',publicMoodBoard);


//routes for sharing and collaboration
router.post('/generate-link',verifyToken,generateSharingLink)
router.put('/disable-sharing',verifyToken,disableSharing)
router.get('/share-mood-history',retrievePublicMoodHistory)

module.exports=router;