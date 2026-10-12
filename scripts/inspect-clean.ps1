Add-Type -AssemblyName System.Drawing
$inspectionFiles = @(Get-ChildItem public/assets/clean-services -File)
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
$label=$file.Name
$graphics.DrawString($label,$font,[System.Drawing.Brushes]::Black,$x,$y+192)
$photo.Dispose()
}
$canvas.Save((Join-Path (Get-Location) "clean-inspection-$sheetIndex.jpg"),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$graphics.Dispose(); $canvas.Dispose(); $font.Dispose()
}
