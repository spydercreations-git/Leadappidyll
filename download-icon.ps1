# Download Idyll Inbox Logo
$url = "https://res.cloudinary.com/dxd79mrse/image/upload/v1772349182/Black_Yellow_Illustrative_Penpal_Mobile_Application_Logo_1_zawfbv.png"
$output = "idyll-inbox-logo.png"

Write-Host "Downloading logo..." -ForegroundColor Green
Invoke-WebRequest -Uri $url -OutFile $output
Write-Host "Logo downloaded as: $output" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://icon.kitchen/" -ForegroundColor White
Write-Host "2. Upload the downloaded 'idyll-inbox-logo.png' file" -ForegroundColor White
Write-Host "3. Select 'Android' platform" -ForegroundColor White
Write-Host "4. Download the generated icons" -ForegroundColor White
Write-Host "5. Extract and copy mipmap folders to: android/app/src/main/res/" -ForegroundColor White
