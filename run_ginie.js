var ls = [125, 250, 500, 150, 300]      // length short
var ll = [500, 300, ]      // length long
var sh = 100                            // Sleeve_H
var fr = [0.5, 0.33, 0.25, 0.2]         // flangeradius
var counter = 0

var i; 
var k;
var length_short; 
var length_long; 
var Sleeve_H;
var flangeradius;

function export_rectangular(length_short, length_long, Sleeve_H, flangeradius, out_file) {
    // code to be executed

    // CornerA = Point(-length_short / 2, -length_long / 2, 10 m);
    // CornerB = Point(-length_short / 2, length_long / 2, 10 m);
    // CornerC = Point(length_short / 2, length_long / 2, 10 m);
    // CornerD = Point(length_short / 2, -length_long / 2, 10 m);
    // MidAB = Point(-length_short / 2, 0, 10 m);
    // MidBC = Point(0, length_long / 2, 10 m);
    // MidCD = Point(length_short / 2, 0, 10 m);
    // MidAD = Point(0, -length_long / 2, 10 m);



    // line_A_AD = CreateLineTwoPoints(CornerA, MidAD);
    // line_A_AB = CreateLineTwoPoints(CornerA, MidAB);
    // line_B_AB = CreateLineTwoPoints(CornerB, MidAB);
    // line_B_BC = CreateLineTwoPoints(CornerB, MidBC);
    // line_C_BC = CreateLineTwoPoints(CornerC, MidBC);
    // line_C_CD = CreateLineTwoPoints(CornerC, MidCD);
    // line_D_CD = CreateLineTwoPoints(CornerD, MidCD);
    // line_D_AD = CreateLineTwoPoints(CornerD, MidAD);


    // Radius_A = CreateCircularFilletBetweenLinearSegments(line_A_AB, MidAB, line_A_AD, MidAD, flangeradius);
    // Radius_B = CreateCircularFilletBetweenLinearSegments(line_B_AB, MidAB, line_B_BC, MidBC, flangeradius);
    // Radius_C = CreateCircularFilletBetweenLinearSegments(line_C_BC, MidBC, line_C_CD, MidCD, flangeradius);
    // Radius_D = CreateCircularFilletBetweenLinearSegments(line_D_AD, MidAD, line_D_CD, MidCD, flangeradius);



    // Pl_A_up = SweepCurve(Radius_A, Vector3d(0, 0, Sleeve_H / 2));
    // Pl_A_dn = SweepCurve(Radius_A, Vector3d(0, 0, -Sleeve_H / 2));
    // Pl_B_up = SweepCurve(Radius_B, Vector3d(0, 0, Sleeve_H / 2));
    // Pl_B_dn = SweepCurve(Radius_B, Vector3d(0, 0, -Sleeve_H / 2));
    // Pl_C_up = SweepCurve(Radius_C, Vector3d(0, 0, Sleeve_H / 2));
    // Pl_C_dn = SweepCurve(Radius_C, Vector3d(0, 0, -Sleeve_H / 2));
    // Pl_D_up = SweepCurve(Radius_D, Vector3d(0, 0, Sleeve_H / 2));
    // Pl_D_dn = SweepCurve(Radius_D, Vector3d(0, 0, -Sleeve_H / 2));


    // CentrePlate = Plate(Point(-400 mm, -400 mm, 10 m), Point(-400 mm, 400mm, 10 m), Point(400 mm, 400 mm, 10 m), Point(400 mm, -400mm, 10 m));

    // tmpArrayOfCurves = JoinMultipleCurves(Array(Radius_B, Radius_C, Radius_D, Radius_A), true);
    // Rename(tmpArrayOfCurves[0], "JoinedFlange");
    // ScrapPlate = CentrePlate.divide(JoinedFlange);
    // Delete(ScrapPlate);

    // GenieRules.Meshing.superElementType = file_number;
    // SimplifyTopology();
    // Analysis1.step(1).execute();
    // Analysis1.step(3).execute();

    // FemExporter = ExportMeshFem();
    // FemExporter.DoExport(out_file);  // save the variable to the file to use in Gini

    return console.log("File saved: " + out_file)
}


for (i = 0; i < ls.length; i++) {
    for (k = 0; k < ll.length; k++){
        for (j = 0; j < fr.length; j++){

        
            length_short = ls[i] //mm;
            length_long  = ll[k] //mm;
            Sleeve_H     = sh //mm;
            flangeradius = fr[j] * length_short 
            counter = counter +1

            // console.log(length_short, length_long, fr[j], counter)
            out_file        = "C:/DNVGL/Workspaces/GeniE/RectangularSCF/mesh10/T"+counter+".FEM"
            export_rectangular(length_short, length_long, Sleeve_H, flangeradius, out_file)
            
        }
    }
  } 
  
