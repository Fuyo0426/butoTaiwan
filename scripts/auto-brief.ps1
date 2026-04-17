# auto-brief.ps1 - ButoTaiwan Weekly Brief Automation
# Mon: Taiwan Kendo | Wed: Technique | Sat: International
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$repoPath = "D:\YaoClaude\Repos\butoTaiwan"
$claudePath = "C:\Users\User\.local\bin\claude"
$logPath = "D:\YaoClaude\Repos\butoTaiwan\scripts\brief-log.txt"

# Topic by day of week (ASCII only in switch)
$day = (Get-Date).DayOfWeek.ToString()
$topic = switch ($day) {
    "Monday"    { "taiwan-kendo" }
    "Wednesday" { "technique" }
    "Saturday"  { "international" }
    default     { "taiwan-kendo" }
}

$topicLabel = switch ($topic) {
    "taiwan-kendo"  { "Taiwan Kendo" }
    "technique"     { "Kendo Technique" }
    "international" { "International Kendo" }
}

$date = Get-Date -Format "yyyy-MM-dd HH:mm"
Add-Content $logPath "[$date] START topic=$topic"

Set-Location $repoPath

# Run kendo-brief
$prompt = "/kendo-brief $topicLabel"
$output = & $claudePath -p $prompt --dangerously-skip-permissions 2>&1
Add-Content $logPath $output

# Check for new files
$changed = git status --porcelain lib/weekly-reports/
if ($changed) {
    git add lib/weekly-reports/
    $commitMsg = "Weekly brief $($date.Split(' ')[0]): $topicLabel"
    git commit -m $commitMsg
    vercel --prod --yes 2>&1 | Tee-Object -Append $logPath
    Add-Content $logPath "[$date] DONE: $commitMsg"
} else {
    Add-Content $logPath "[$date] SKIP: no new content"
}
