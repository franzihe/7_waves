ls = new Array(125 mm, 250 mm, 500 mm, 150 mm, 300 mm);      // length short
ll = new Array(500 mm, 300 mm);                   // length long
sh = 100 mm;                                    // Sleeve_H
fr = new Array(0.5, 0.33, 0.25, 0.2);         // flangeradius
counter = 0;




for (i = 0; i < ls.length; i++) {
    for (k = 0; k < ll.length; k++){
        for (j = 0; j < fr.length; j++){

        
            length_short = ls[i];
            length_long  = ll[k];
            Sleeve_H     = sh;
            flangeradius = fr[j] * length_short ;
            counter = counter +1

            // console.log(length_short, length_long, fr[j], counter)
            out_file        = "C:/DNVGL/Workspaces/GeniE/RectangularSCF/mesh10/T"+counter+".FEM"
            // export_rectangular(length_short, length_long, Sleeve_H, flangeradius, out_file)
            CornerA = Point(-length_short / 2, -length_long / 2,  0 m);
            CornerB = Point(-length_short / 2, length_long / 2, 0 m);
            CornerC = Point(length_short / 2, length_long / 2, 0 m);
            CornerD = Point(length_short / 2, -length_long / 2, 0 m);
            MidAB = Point(-length_short / 2, 0, 0 m);
            MidBC = Point(0, length_long / 2, 0 m);
            MidCD = Point(length_short / 2, 0, 0 m);
            MidAD = Point(0, -length_long / 2, 0 m);



            line_A_AD = CreateLineTwoPoints(CornerA, MidAD);
            line_A_AB = CreateLineTwoPoints(CornerA, MidAB);
            line_B_AB = CreateLineTwoPoints(CornerB, MidAB);
            line_B_BC = CreateLineTwoPoints(CornerB, MidBC);
            line_C_BC = CreateLineTwoPoints(CornerC, MidBC);
            line_C_CD = CreateLineTwoPoints(CornerC, MidCD);
            line_D_CD = CreateLineTwoPoints(CornerD, MidCD);
            line_D_AD = CreateLineTwoPoints(CornerD, MidAD);


            Radius_A = CreateCircularFilletBetweenLinearSegments(line_A_AB, MidAB, line_A_AD, MidAD, flangeradius - 1 mm);
            Radius_B = CreateCircularFilletBetweenLinearSegments(line_B_AB, MidAB, line_B_BC, MidBC, flangeradius - 1 mm);
            Radius_C = CreateCircularFilletBetweenLinearSegments(line_C_BC, MidBC, line_C_CD, MidCD, flangeradius - 1 mm);
            Radius_D = CreateCircularFilletBetweenLinearSegments(line_D_AD, MidAD, line_D_CD, MidCD, flangeradius - 1 mm);



            Pl_A_up = SweepCurve(Radius_A, Vector3d(0, 0, Sleeve_H / 2));
            Pl_A_dn = SweepCurve(Radius_A, Vector3d(0, 0, -Sleeve_H / 2));
            Pl_B_up = SweepCurve(Radius_B, Vector3d(0, 0, Sleeve_H / 2));
            Pl_B_dn = SweepCurve(Radius_B, Vector3d(0, 0, -Sleeve_H / 2));
            Pl_C_up = SweepCurve(Radius_C, Vector3d(0, 0, Sleeve_H / 2));
            Pl_C_dn = SweepCurve(Radius_C, Vector3d(0, 0, -Sleeve_H / 2));
            Pl_D_up = SweepCurve(Radius_D, Vector3d(0, 0, Sleeve_H / 2));
            Pl_D_dn = SweepCurve(Radius_D, Vector3d(0, 0, -Sleeve_H / 2));


            CentrePlate = Plate(Point(-400 mm, -400 mm, 0 m), Point(-400 mm, 400mm, 0 m), Point(400 mm, 400 mm, 0 m), Point(400 mm, -400mm, 0 m));

            tmpArrayOfCurves = JoinMultipleCurves(Array(Radius_B, Radius_C, Radius_D, Radius_A), true);
            Rename(tmpArrayOfCurves[0], "JoinedFlange");
            ScrapPlate = CentrePlate.divide(JoinedFlange);
            Delete(ScrapPlate);

            GenieRules.Meshing.superElementType = counter;
            SimplifyTopology();
            Analysis1.step(1).execute();
            Analysis1.step(3).execute();

            FemExporter = ExportMeshFem();
            FemExporter.DoExport(out_file);  // save the variable to the file to use in Gini

            // console.log("File saved: " + out_file);

            Delete(CornerD);
            Delete(MidAB);
            Delete(MidCD);
            Delete(MidAD);
            Delete(CornerA);
            Delete(JoinedFlange);
            Delete(Pl_B_up);
            Delete(Pl_A_up);
            Delete(Pl_A_dn);
            Delete(Pl_B_dn);
            Delete(Pl_C_up);
            Delete(Pl_C_dn);
            Delete(Pl_D_up);
            Delete(Pl_D_dn);
            Delete(CornerC);
            Delete(MidBC);
            Delete(CornerB);
            
        }
    }
  } 
  
