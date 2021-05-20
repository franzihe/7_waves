ls              = new Array(125 mm, 250 mm, 500 mm, 150 mm, 300 mm); // length short
ll              = new Array(500 mm, 300 mm);                         // length long
Sleeve_H        = 100 mm;                                            // Sleeve_H
fr              = new Array(0.5, 0.33, 0.25, 0.2);                   // flangeradius
plate_thickness = T10;                                               // plate thickness
ft              = new Array(T05, T10, T15);                           // flange thickness


loc = "C:/DNVGL/Workspaces/GeniE/RectangularSCF/mesh10/T";

const lib = require("./functions");




for (i = 0; i < ls.length; i++) {
    cls = i+1;                // counter for length short naming convention
    for (k = 0; k < ll.length; k++){
        cll = k+1;            // counter for length long naming convention

        for (j = 0; j < fr.length; j++){
            cfr = j+1;        // counter for flangeradius naming convention

             for (l = 0; l < ft.length; l++){
                 cft = l+1;    // counter for flange thickness naming convention

                 // initialize variables
                 length_short        = ls[i];
                 length_long         = ll[k];
                 flangeradius        = fr[j] * length_short ;
                 flange_thickness    = ft[l];


                 // File name convention
                 // T(flange_thickness)(flangeradius)(length short)(length long)
                 // T(123)(1234)(12345)(12)
                 out_file        = loc+cft+cfr+cls+cll+".FEM";
            
            
                if (ll[k] == 500 mm){
                    if (ls[i] == 125  || ls[i] == 250 || ls[i] == 500){
                        // run analysis
                        //console.log(ls[i], ll[k], out_file)
                        const cc = lib.calc_rectangle(length_short, length_long, flangeradius, flange_thickness, Sleeve_H, cft+cfr+cls+cll);
                        
                    }
                    else {
                        continue;
                    }
                }
                if (ll[k] == 300 mm){
                    if (ls[i] == 150  || ls[i] == 300 ){
                        // run analysis
                        //console.log(ll[k], ls[i], out_file)
                        const cc = lib.calc_rectangle(length_short, length_long, flangeradius, flange_thickness, Sleeve_H, cft+cfr+cls+cll);
                    }
                    else {
                        continue;
                    }
                }
            }
        }
    }
}
