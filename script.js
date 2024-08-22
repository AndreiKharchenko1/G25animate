document.addEventListener('DOMContentLoaded', (event) => {
document.getElementById('submitButton').addEventListener('click', processInput);
document.getElementById('inputString').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        processInput();
    }
});

function processInput() {
    const inputString = document.getElementById('inputString').value;
    const numberArray = inputString.match(/-?\d+(\.\d+)?([eE][+-]?\d+)?/g);  // Extract numbers including scientific notation
    const userindex = numberArray.map(Number).slice(0, 25);  // Convert to numbers and limit to 25 elements
    
    // Convert numbers in scientific notation to floating-point numbers
    const floatNumbers = userindex.map(num => parseFloat(num.toFixed(20)));

    const IrishG25 = "0.133361,0.134098,0.061169,0.048864,0.037788,0.019352,0.003293,0.004713,0.003568,0.002927,-0.006971,0.00584,-0.014189,-0.014076,0.025935,0.005215,-0.011145,0.001894,0.000597,0.001776,0.005114,0.001279,0.000293,0.014407,0.000661";
    const IRISHCOORDS = IrishG25.split(",").map(Number);
    
    const BalochG25 = "0.066587,0.053823,-0.098209,0.024979,-0.068628,0.026332,0.004778,0.001077,-0.021782,-0.019044,-0.003613,-0.002598,0.006417,-0.005688,0.015992,0.024286,-0.014701,0.002555,0.005541,-0.025293,-0.001081,-0.014797,-0.001962,-0.015123,0.011506";
    const BALOCHCOORDS = BalochG25.split(",").map(Number);
    
    const MesopotamianG25 = "0.061464,0.115872,-0.06181,-0.054555,-0.030129,-0.01598,-0.000517,-0.004846,-0.002659,-0.007253,0.004839,-0.007928,0.013424,0.000495,0.002362,0.010952,-0.004459,0.001938,-0.000339,-0.00015,0.002745,0.001546,-0.001442,0.002181,0.000503";
    const MESOPOTAMIANCOORDS = MesopotamianG25.split(",").map(Number);
  
    const ArabianG25 = "0.053393,0.141712,-0.064899,-0.114607,-0.012422,-0.04693,-0.012242,-0.008727,0.050424,-0.005169,0.017405,-0.032426,0.06383,0.00314,0.003924,0.029037,-0.022568,0.004814,-0.001394,0.031481,0.013023,0.018154,-0.007462,0.008884,-0.010113";
    const ARABIANCOORDS = ArabianG25.split(",").map(Number);

    const BalticG25 = "0.135449,0.122473,0.088774,0.089471,0.043208,0.034025,0.012597,0.014076,-0.002168,-0.036885,-0.003573,-0.013818,0.023221,0.031378,-0.010559,0.004057,0.002712,-0.00038,0.001609,0.004302,-0.002795,-0.005713,0.009071,-0.009327,0.002634";
    const BALTICCOORDS = BalticG25.split(",").map(Number);  

    const CzechG25 = "0.13116,0.131862,0.060484,0.047258,0.038658,0.018922,0.006345,0.008662,0.004673,-0.008887,-0.001686,-0.003897,0.006049,0.011772,0.001743,0.000999,-0.000642,-0.000146,0.003568,0.002896,-0.001267,-0.000162,0.006513,0.00393,0.001594";
    const CZECHCOORDS = CzechG25.split(",").map(Number);

    const EastSlavG25 = "0.132262,0.123623,0.075022,0.069596,0.040233,0.026569,0.010732,0.013322,-0.000273,-0.024602,-0.002696,-0.009212,0.019326,0.027231,-0.011265,-0.003801,-0.000965,0.000372,0.00414,-0.001051,-0.004234,-0.004608,0.007724,-0.00686,0.000695";
    const EASTSLAVCOORDS = EastSlavG25.split(",").map(Number);

    const FinnishG25 = "0.13077,0.086658,0.089419,0.07831,0.029544,0.02414,0.010419,0.015025,0.003159,-0.024055,0.003609,-0.006394,0.012768,0.005459,0.002021,0.00056,-0.007186,-0.000451,-0.000056,0.002626,0.008083,-0.001869,0.001479,0.008649,0.004338";
    const FINNISHCOORDS = FinnishG25.split(",").map(Number);

    const GreekG25 = "0.118518,0.145158,0.006434,-0.026284,0.019157,-0.008803,0.001895,-0.00049,0.000767,0.016754,0.001563,0.002323,-0.00367,0.006804,-0.01565,-0.001599,0.010496,0.000127,0.007385,-0.005229,-0.007861,-0.000356,0.002434,0.003035,-0.001123";
    const GREEKCOORDS = GreekG25.split(",").map(Number);

    const IberianG25 = "0.106174,0.144611,0.036007,-0.004432,0.042137,-0.004049,-0.003741,0.00276,0.025598,0.029741,-0.000734,0.007421,-0.012737,-0.011263,0.012557,-0.000398,-0.001132,-0.000887,-0.005762,-0.000245,0.001138,-0.002572,0.001301,-0.001133,-0.000105";
    const IBERIANCOORDS = IberianG25.split(",").map(Number);

    const ItalianG25 = "0.122848,0.147614,0.022493,-0.012505,0.029984,-0.0049,0.002333,-0.000478,0.008517,0.023209,-0.001253,0.005866,-0.011086,-0.004915,0.000543,-0.001979,0.000829,0.001927,0.002191,-0.003403,-0.001114,0.001095,-0.00184,0.004527,-0.001292";
    const ITALIANCOORDS = ItalianG25.split(",").map(Number);

    const KavkazG25 = "0.110029,0.098506,-0.029415,0.00829,-0.037443,0.007902,0.009009,-0.005692,-0.052017,-0.032863,0.001624,0.006694,-0.006838,0.000367,0.012079,-0.00137,-0.008171,0.000465,-0.006955,-0.004711,-0.00104,-0.000536,0.001479,0.011287,0.003752";
    const KAVKAZCOORDS = KavkazG25.split(",").map(Number);

    const KenyanG25 = "-0.597897,0.063688,0.017186,0.007106,0,0.005857,-0.014503,0.018889,0.004529,-0.021582,-0.005057,0.015993,-0.032875,0.001199,-0.030401,0.026726,-0.01803,-0.002443,-0.009948,0.004717,0.001693,0.000194,0.003416,0.003976,0.000667";
    const KENYANCOORDS = KenyanG25.split(",").map(Number);

    const KhoiSanG25 = "-0.622043,0.060424,0.02093,0.030039,-0.000462,0.000837,0.236773,-0.1823,0.018509,0.006743,0.00203,-0.053952,-0.021184,0.005505,0.018797,-0.021281,0.029662,0.262309,-0.087737,0.001751,-0.033191,-0.002844,0.003821,-0.005001,0.001676";
    const KHOISANCOORDS = KhoiSanG25.split(",").map(Number);

    const NafriG25 = "-0.085367,0.130213,-0.012822,-0.070881,0.021132,-0.03294,-0.027783,0.009769,0.055403,0.024399,0.009509,-0.009025,0.02699,-0.014466,0.016302,-0.006188,-0.002767,-0.017033,-0.038422,0.009435,-0.009844,-0.029512,0.020911,-0.001125,0.005921";
    const NAFRICOORDS = NafriG25.split(",").map(Number);

    const PomorG25 = "0.119742,0.043668,0.090962,0.079652,0.009602,0.01612,0.013772,0.013753,-0.002127,-0.035281,0.013381,-0.009681,0.019891,0.00311,-0.009338,-0.002148,-0.000235,-0.005017,-0.005807,0.000475,0.00262,-0.001088,-0.000222,0.002193,0.00103";
    const POMORCOORDS = PomorG25.split(",").map(Number);

    const SaamiG25 = "0.111262,-0.030212,0.111722,0.079781,-0.009329,0.008297,0.008137,0.01386,0.002966,-0.032096,0.022288,-0.007475,0.018071,-0.019826,-0.004004,0.002693,0.001157,-0.001489,-0.005986,0.004494,0.015816,0.001345,-0.002565,0.002658,0.000344";
    const SAAMICOORDS = SaamiG25.split(",").map(Number);

    const ScandinavianG25 = "0.132193,0.125885,0.072642,0.058972,0.040264,0.02079,0.00638,0.009294,0.003649,-0.006663,-0.004203,0.000533,-0.003045,-0.003352,0.014593,0.005865,-0.005106,0.001622,0.002991,0.005015,0.006773,0.002526,0.001253,0.011594,0.000212";
    const SCANDINAVIANCOORDS = ScandinavianG25.split(",").map(Number);

    const UdmurtG25 = "0.107841,-0.020702,0.079718,0.066315,-0.03057,0.008875,0.008617,0.010716,-0.011055,-0.035615,0.021186,-0.005995,0.015072,-0.03088,-0.010391,-0.005453,-0.004182,-0.001,-0.009682,-0.009588,0.000736,0.003152,-0.004352,0.008175,-0.002803";
    const UDMURTCOORDS = UdmurtG25.split(",").map(Number);

    const VolgaTatarG25 = "0.10927,0.010702,0.061413,0.044028,-0.005847,0.009461,0.008171,0.010988,-0.007457,-0.021938,0.002561,-0.006848,0.012922,-0.007315,-0.009438,-0.003672,0.001534,0.000195,-0.007261,-0.004242,-0.000163,0.000904,-0.006845,0.000853,-0.000111";
    const VOLGATARCOORDS = VolgaTatarG25.split(",").map(Number);

    const YorubaG25 = "-0.630062,0.062501,0.022113,0.016708,0.000503,0.012474,-0.044417,0.047767,-0.048881,0.032769,0.004621,0.00079,0.023056,0.000951,0.012523,-0.009607,0.007076,0.000449,0.006022,-0.00299,0.001554,0.002316,-0.001759,-0.000471,-0.000425";
    const YORUBACOORDS = YorubaG25.split(",").map(Number);


    //21 done

    const AustralianG25 = "-0.042115,-0.235095,-0.213639,0.234499,0.138487,-0.340247,-0.003173,0.0075,-0.008283,0.00082,-0.006171,0.001199,0.000818,-0.002684,-0.003529,-0.000133,0.01004,0.002027,-0.002388,0.006065,0.003556,-0.000371,-0.003389,0.001265,-0.00455";
    const AUSTRALIANCOORDS = AustralianG25.split(",").map(Number);

    const ChineseG25 = "0.019187,-0.45249,-0.020796,-0.070968,0.10103,0.04765,0.000269,-0.008736,-0.015106,-0.006717,-0.030622,-0.003618,0.005777,-0.00407,-0.004188,0.002652,-0.000335,0.002244,-0.000664,-0.015668,0.013726,0.008656,0.012624,0.000207,-0.002652";
    const CHINESECOORDS = ChineseG25.split(",").map(Number);

    const JapaneseG25 = "0.022955,-0.445479,0.013074,-0.059109,0.036212,0.009343,0.003525,0.000577,-0.006511,0.010661,-0.074049,-0.007468,0.011546,-0.007065,-0.011061,-0.004464,0.000304,0.003589,0.001676,-0.009254,0.027036,-0.01659,0.004909,0.003374,-0.041972";
    const JAPANESECOORDS = JapaneseG25.split(",").map(Number);

    const KhantyG25 = "0.084336,-0.188762,0.113242,0.062239,-0.087372,-0.025353,0.008879,0.014372,-0.000313,-0.033816,0.055171,-0.004875,0.021514,-0.076368,-0.02546,-0.014606,-0.004877,0.002011,-0.001591,-0.01174,-0.003552,0.023629,0.019847,-0.002636,-0.009651";
    const KHANTYCOORDS = KhantyG25.split(",").map(Number);

    const MongolG25 = "0.042088,-0.360259,0.060708,-0.030516,-0.042903,-0.024384,0.014961,0.016609,0.000051,0.007335,-0.033902,-0.003464,0.000419,0.001664,0.001598,-0.000569,-0.003126,0.000225,0.004191,0.009945,-0.012623,-0.006587,-0.013092,-0.00163,0.001432";
    const MONGOLCOORDS = MongolG25.split(",").map(Number);

    const PapuanG25 = "-0.045985,-0.241087,-0.263758,0.309242,0.206931,-0.509589,-0.001974,0.007015,-0.041273,-0.011955,-0.018902,0.000869,0.001397,-0.00311,0.000163,-0.000318,-0.00219,-0.00185,-0.001081,-0.001526,0.002346,0.001805,0.001232,0.001832,0.001605";
    const PAPUANCOORDS = PapuanG25.split(",").map(Number);

    const SEAG25 = "0.01935,-0.378792,-0.045506,-0.020026,0.050163,0.037557,-0.000548,0.000769,0.004772,0.009476,-0.02241,-0.001948,0.006095,-0.001422,-0.007872,-0.002166,0.007649,-0.003632,-0.006117,0.008379,-0.001081,0.022711,0.004519,0.004097,0.031734";
    const SEACOORDS = SEAG25.split(",").map(Number);

    const JattG25 = "0.080245,0.011171,-0.081835,0.085595,-0.058319,0.047969,-0.000235,0.006807,-0.001841,-0.007745,-0.003329,-0.000225,-0.001189,-0.011079,0.012826,0.003447,-0.010887,0.003674,-0.000566,-0.007379,-0.0073,-0.004142,0.003513,-0.000663,0.003413";
    const JATTCOORDS = JattG25.split(",").map(Number);

    const TajikG25 = "0.100847,0.059002,-0.028473,0.024161,-0.04607,0.018658,0.006463,-0.000992,-0.035802,-0.026479,-0.004774,0.000315,-0.000134,-0.009393,0.013314,0.01776,-0.003592,0.000462,0.001427,-0.01103,-0.007849,-0.005002,0.001485,0.002356,0.003551";
        const TAJIKCOORDS = TajikG25.split(",").map(Number);

    const TamilG25 = "0.037296,-0.088351,-0.173815,0.113481,-0.075943,0.061142,-0.001825,0.014261,0.04749,0.030931,-0.002907,-0.000275,-0.001531,0.005606,-0.007827,-0.006537,0.002877,-0.000089,-0.000122,0.00301,0.003714,0.000655,-0.000641,-0.000076,-0.005149";
    const TAMILCOORDS = TamilG25.split(",").map(Number);

    const BengaliG25 = "0.045864,-0.109259,-0.135786,0.093879,-0.052806,0.060043,-0.000263,0.00923,0.034131,0.020518,-0.003085,0.000934,-0.000866,0.000405,-0.000575,-0.003276,-0.000038,-0.000238,-0.001079,0.001869,0.000462,0.003062,0.001776,0.004303,0.001775";
    const BENGALICOORDS = BengaliG25.split(",").map(Number);

    const SomaliG25 = "-0.296623,0.093429,-0.026851,-0.069736,0.000954,-0.03408,-0.020493,0.005769,0.115392,-0.079674,-0.008948,-0.006669,0.005218,-0.001665,0.024728,-0.018616,0.014864,-0.001976,0.00998,-0.003839,0.000599,0.004946,-0.002736,-0.001241,-0.00279";
    const SOMALICOORDS = SomaliG25.split(",").map(Number);

    const GujaratiG25 = "0.047806,-0.045699,-0.143306,0.112405,-0.080938,0.06275,-0.00047,0.007846,0.029656,0.018953,-0.001949,0.005395,-0.000149,-0.008533,-0.004479,0.008353,0.018906,-0.001394,0.004902,-0.003252,0.000998,-0.000989,0.007765,0.001807,-0.003353";
    const GUJARATICOOORDS = GujaratiG25.split(",").map(Number);

    const AndamaneseG25 = "-0.022524,-0.244528,-0.132429,0.095965,0.029933,-0.004756,-0.007644,0.007579,0.054823,0.024439,0.023495,0.003218,-0.004061,0.008475,-0.012693,-0.011145,0.010918,-0.00162,-0.005981,0.02883,-0.003711,0.00969,-0.012824,-0.001123,0.004342";
    const ANDAMANESECOORDS = AndamaneseG25.split(",").map(Number);

    const BasqueG25 = "0.127585,0.148545,0.059036,0.015798,0.053772,0.004386,-0.002414,0.004091,0.025417,0.038021,-0.006953,0.009632,-0.022069,-0.014951,0.015892,-0.000783,-0.007337,0.000069,0.0004,-0.004036,0.008973,0.001945,-0.004807,-0.006244,-0.000446";
    const BASQUECOORDS = BasqueG25.split(",").map(Number);

    const SardinianG25 = "0.121687,0.167285,0.02849,-0.050652,0.060151,-0.022134,-0.003952,0.002496,0.041574,0.077351,-5.9e-05,0.016649,-0.028664,-0.012974,-0.013572,-0.003001,0.011403,-0.001347,0.00168,-0.012995,-0.002121,-0.001102,-0.010084,-0.021383,0.000337";
    const SARDINIANCOORDS = SardinianG25.split(",").map(Number);

    const AMERINDIANG25 = "0.056229,-0.269522,0.1111,0.087469,-0.09688,-0.016957,-0.273881,-0.327263,-0.01129,-0.012392,-0.004027,-0.002008,-0.002438,0.021937,-0.003664,0.008221,0.007745,-0.001824,-0.000025,0.000425,-0.001073,0.009224,0.000468,0.003519,-0.002155";
    const AMERINDIANCOORDS = AMERINDIANG25.split(",").map(Number);
    // Optimization to find best coefficients
    function optimizeMixture(userindex, ...coordsArray) {
        const n = userindex.length;
        const numCoords = coordsArray.length;
    
        // Step 1: Calculate distances between userindex and each coordinate set in coordsArray
        const distances = coordsArray.map((coords, index) => {
            let sumSquaredDiff = 0;
            for (let i = 0; i < n; i++) {
                sumSquaredDiff += Math.pow(userindex[i] - coords[i], 2);
            }
            return { index, distance: Math.sqrt(sumSquaredDiff) };
        });
    
        // Step 2: Sort distances from closest to furthest
        distances.sort((a, b) => a.distance - b.distance);
    
        // Step 3: Assign initial weights based on the ranking
        let weights = Array(numCoords).fill(0);
        let initialWeight = 0.25;
        for (let i = 0; i < distances.length; i++) {
            weights[distances[i].index] = initialWeight;
            initialWeight /= 1.65;
        }
    
        const learningRate = 0.001;
        const tolerance = 1e-10;
        let iteration = 0;
        const maxIterations = 100000000;
    
        function costFunction(weights) {
            let cost = 0;
            for (let i = 0; i < n; i++) {
                let estimate = 0;
                for (let j = 0; j < numCoords; j++) {
                    estimate += weights[j] * coordsArray[j][i];
                }
                cost += Math.pow(userindex[i] - estimate, 2);
            }
            return cost / n;
        }
    
        function gradientDescentStep(weights) {
            let gradients = Array(numCoords).fill(0);
            for (let i = 0; i < n; i++) {
                let estimate = 0;
                for (let j = 0; j < numCoords; j++) {
                    estimate += weights[j] * coordsArray[j][i];
                }
                const error = estimate - userindex[i];
                for (let j = 0; j < numCoords; j++) {
                    gradients[j] += error * coordsArray[j][i];
                }
            }
            gradients = gradients.map(g => (2 / n) * g);
    
            // Update weights
            for (let j = 0; j < numCoords; j++) {
                weights[j] -= learningRate * gradients[j];
            }
    
            // Clipping weights to the range [0, 1] and normalize
            let sum = 0;
            for (let j = 0; j < numCoords; j++) {
                weights[j] = Math.max(0, Math.min(1, weights[j]));
                sum += weights[j];
            }
            for (let j = 0; j < numCoords; j++) {
                weights[j] /= sum;
            }
    
            return weights;
        }
    
        let previousCost = costFunction(weights);
        console.log(`Initial cost: ${previousCost.toFixed(6)}`);
    
        while (iteration < maxIterations) {
            weights = gradientDescentStep(weights);
            const currentCost = costFunction(weights);
            console.log(`Iteration ${iteration}: cost=${currentCost.toFixed(6)}`);
    
            if (Math.abs(previousCost - currentCost) < tolerance) {
                console.log(`Converged after ${iteration} iterations.`);
                break;
            }
            previousCost = currentCost;
            iteration++;
        }
    
        if (iteration === maxIterations) {
            console.log('Max iterations reached without convergence.');
        }
    
        return weights;
    }
    
   
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y ,z , A, B , C, D, E, F, G, H, I, J, K, L] = optimizeMixture(
        userindex, 
        MESOPOTAMIANCOORDS, 
        BALOCHCOORDS, 
        IRISHCOORDS, 
        ARABIANCOORDS, 
        BALTICCOORDS, 
        CZECHCOORDS, 
        EASTSLAVCOORDS, 
        FINNISHCOORDS, 
        GREEKCOORDS, 
        IBERIANCOORDS, 
        ITALIANCOORDS, 
        KAVKAZCOORDS, 
        KENYANCOORDS, 
        KHOISANCOORDS, 
        NAFRICOORDS, 
        POMORCOORDS,
        SAAMICOORDS,
        SCANDINAVIANCOORDS,
        UDMURTCOORDS,
        VOLGATARCOORDS,
        YORUBACOORDS,
        AUSTRALIANCOORDS,
        CHINESECOORDS,
        JAPANESECOORDS,
        KHANTYCOORDS,
        MONGOLCOORDS,
        PAPUANCOORDS,
        SEACOORDS,
        JATTCOORDS,
        TAJIKCOORDS,
        TAMILCOORDS,
        BENGALICOORDS,
        SOMALICOORDS,
        GUJARATICOOORDS,
        ANDAMANESECOORDS,
        BASQUECOORDS,
        SARDINIANCOORDS,
        AMERINDIANCOORDS

    );

    function sortAndFilterNonZero(valuesArray, sourcesArray) {
        // Combine values with their corresponding sources
        let combinedArray = valuesArray.map((value, index) => ({
            value: value,
            source: sourcesArray[index]
        }));
    
        // Sort the combined array by value in descending order
        combinedArray.sort((a, b) => b.value - a.value);
    
        // Filter out the elements with a value of zero
        let filteredArray = combinedArray.filter(item => item.value  >= 0.001);
    
        // Return the filtered array
        return filteredArray;
    }


    let valuesArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L];
    let SourcesArray =['Mesopotamians.mp4', 'Balochi.mp4', 'Irish.mp4', 'Arabian.mp4', 'Baltic.mp4', 'CentralEuro.mp4', 'EastSlav.mp4', 'Finnish.mp4', 'Greek.mp4',
        'Iberian.mp4','Italy.mp4','Kavkaz.mp4','Kenyan.mp4','KhoiSan.mp4','Nafri.mp4','Pomor.mp4','Saami.mp4','Scandinavian.mp4','Udmurt.mp4','VolgaTatar.mp4',
        'Yoruba.mp4','Australian.mp4','Chinese.mp4','Japanese.mp4','Khanty.mp4','Mongol.mp4','Papuan.mp4','SEA.mp4','Jatt.mp4','Tajik.mp4','Tamil.mp4','Bengali.mp4',
        'Somali.mp4','Gujarati.mp4','Andamanese.mp4','Basque.mp4','Sardinian.mp4', 'Amerindian.mp4'
    ];
    
    let result = sortAndFilterNonZero(valuesArray, SourcesArray);

     console.log(result);

     const percentages = result.map(item => item.value * 100);  // Convert to percentages
     const videos = result.map(item => item.source);  // Extract the video sources from the result
     let currentVideoIndex = 0;
     const videoPlayer = document.getElementById('videoPlayer');
     
     
     
     // Function to load and play the current video and update the overlay
     function loadAndPlayVideo(index) {
         if (index < videos.length) {
             videoPlayer.src = videos[index];
             // Update the overlay text with the formatted value
             const value = percentages[index];
             OVERLAY = value.toFixed(2) + '%';  // Format to 2 decimal places
             console.log(OVERLAY, value);
             document.getElementById('current').innerText = OVERLAY;
             videoPlayer.play();
             document.getElementById('output').innerText += videos[index] + " -- " + percentages[index].toFixed(2) + "% \n";
         }
     }
     
     // Event listener for when the video ends
     videoPlayer.addEventListener('ended', function() {
         currentVideoIndex++;
         if (currentVideoIndex < videos.length) {
             loadAndPlayVideo(currentVideoIndex);
         }
     });
     
     // Start playing the first video
     loadAndPlayVideo(currentVideoIndex);
     
}
});