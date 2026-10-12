Add-Type -AssemblyName System.Drawing
$inspectionFiles = @("home-about1.jpg", "home-about2.jpg", "slider/slider1.jpg", "banner/concrete-style-banner.jpg", "hightlights-concrete.jpg", "products/polyurethane-floor.jpg", "products/epoxy-floor.jpg") | ForEach-Object { Get-Item -LiteralPath ("public/assets/img/" + $_) }
for ($sheetIndex=0; $sheetIndex -lt [Math]::Ceiling($inspectionFiles.Count/20); $sheetIndex++) {
$canvas = New-Object System.Drawing.Bitmap 1200,1100
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.Clear([System.Drawing.Color]::White)
$font = New-Object System.Drawing.Font 'Arial',12
for($i=0;$i -lt 20;$i++) {
$idx=$sheetIndex*20+$i
if($idx -ge $inspectionFiles.Count){break}
$file=$inspectionFiles[$idx]
$photo=[System.Drawing.Image]::FromFile($file.FullName)
$x=($i%4)*300
$y=[Math]::Floor($i/4)*220
$graphics.DrawImage($photo,$x,$y,290,190)
$label=$file.FullName.Replace((Resolve-Path 'public/assets/img').Path+'\','')
$graphics.DrawString($label,$font,[System.Drawing.Brushes]::Black,$x,$y+192)
$photo.Dispose()
}
$canvas.Save((Join-Path (Get-Location) "extra-inspection-$sheetIndex.jpg"),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$graphics.Dispose(); $canvas.Dispose(); $font.Dispose()
}
