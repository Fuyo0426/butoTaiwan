# setup-scheduler.ps1 — 一次性執行，建立三個排程任務
# 以「系統管理員」身份執行 PowerShell 後執行此腳本

$scriptPath = "D:\YaoClaude\Repos\butoTaiwan\scripts\auto-brief.ps1"
$action = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-NonInteractive -ExecutionPolicy Bypass -File `"$scriptPath`""

# 週一 09:00
$triggerMon = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At "09:00"
# 週三 09:00
$triggerWed = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Wednesday -At "09:00"
# 週六 09:00
$triggerSat = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Saturday -At "09:00"

$settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 30) `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable

Register-ScheduledTask `
    -TaskName "ButoTaiwan_AutoBrief" `
    -Action $action `
    -Trigger $triggerMon, $triggerWed, $triggerSat `
    -Settings $settings `
    -RunLevel Highest `
    -Description "武道台灣週報自動生成：週一台灣劍道、週三技法研究、週六國際動態" `
    -Force

Write-Host "✅ 排程設定完成" -ForegroundColor Green
Write-Host "週一/三/六 09:00 自動執行 /kendo-brief" -ForegroundColor Cyan
Get-ScheduledTask -TaskName "ButoTaiwan_AutoBrief" | Select-Object TaskName, State
