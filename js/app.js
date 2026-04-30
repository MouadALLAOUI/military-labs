/* ============================================
   MILITARY INTELLIGENCE SYSTEM - APPLICATION JS
   Classified Secure Base UI
   ============================================ */

// ============================================
// SAMPLE DATA
// ============================================

const agentsData = [
    { id: 1, codename: "NIGHTHAWK", real_name: "James Morrison", clearance_level: "TOP SECRET", status: "active", location: "Berlin, DE", last_contact: "2024-01-15 14:32" },
    { id: 2, codename: "PHANTOM", real_name: "Elena Volkov", clearance_level: "SECRET", status: "active", location: "Moscow, RU", last_contact: "2024-01-15 12:15" },
    { id: 3, codename: "VIPER", real_name: "Marcus Chen", clearance_level: "TOP SECRET", status: "pending", location: "Shanghai, CN", last_contact: "2024-01-14 23:45" },
    { id: 4, codename: "SPECTER", real_name: "Sarah Williams", clearance_level: "CONFIDENTIAL", status: "inactive", location: "London, UK", last_contact: "2024-01-10 09:20" },
    { id: 5, codename: "REAPER", real_name: "Dmitri Petrov", clearance_level: "TOP SECRET", status: "active", location: "St. Petersburg, RU", last_contact: "2024-01-15 16:00" },
    { id: 6, codename: "GHOST", real_name: "Alex Turner", clearance_level: "SECRET", status: "active", location: "New York, US", last_contact: "2024-01-15 11:30" },
];

const casesData = [
    { id: 1, title: "Operation Dark Web", status: "active", priority: "HIGH", assigned: "NIGHTHAWK, PHANTOM", created: "2024-01-10", description: "Investigation of illegal arms trafficking through dark web channels." },
    { id: 2, title: "Project Bluebird", status: "pending", priority: "CRITICAL", assigned: "VIPER", created: "2024-01-12", description: "Surveillance of suspected foreign intelligence operative." },
    { id: 3, title: "Cyber Storm", status: "active", priority: "MEDIUM", assigned: "REAPER, GHOST", created: "2024-01-08", description: "Analysis of recent cyber attacks on government infrastructure." },
    { id: 4, title: "Silent Watch", status: "closed", priority: "LOW", assigned: "SPECTER", created: "2024-01-05", description: "Routine monitoring of communication channels." },
    { id: 5, title: "Iron Curtain", status: "active", priority: "HIGH", assigned: "PHANTOM", created: "2024-01-14", description: "Counter-intelligence operation targeting insider threats." },
];

const communicationsData = [
    { id: 1, sender: "HQ Command", avatar: "HQ", time: "14:32", message: "Agent NIGHTHAWK, confirm your position in Berlin sector." },
    { id: 2, sender: "NIGHTHAWK", avatar: "NH", time: "14:35", message: "Position confirmed. Currently surveilling target location. No anomalies detected." },
    { id: 3, sender: "HQ Command", avatar: "HQ", time: "14:40", message: "Copy that. Maintain surveillance. Backup team en route." },
    { id: 4, sender: "PHANTOM", avatar: "PH", time: "15:10", message: "Requesting clearance for enhanced surveillance protocols." },
    { id: 5, sender: "HQ Command", avatar: "HQ", time: "15:15", message: "Clearance granted. Proceed with caution." },
];

const reportsData = [
    { id: 1, title: "Weekly Intelligence Summary", date: "2024-01-15", author: "Analyst Team Alpha", reviewed: false, summary: "Comprehensive overview of global intelligence activities." },
    { id: 2, title: "Threat Assessment Report", date: "2024-01-14", author: "Security Division", reviewed: true, summary: "Analysis of emerging threats to national security." },
    { id: 3, title: "Cyber Incident Report #4521", date: "2024-01-13", author: "Cybersecurity Unit", reviewed: false, summary: "Documentation of attempted breach on classified systems." },
    { id: 4, title: "Field Operations Log", date: "2024-01-12", author: "Field Operations", reviewed: true, summary: "Daily log of field agent activities and observations." },
    { id: 5, title: "Counterintelligence Brief", date: "2024-01-11", author: "CI Division", reviewed: false, summary: "Briefing on counterintelligence operations and findings." },
];

const secretsData = [
    { id: 1, title: "PROJECT OLYMPUS", classification: "TOP SECRET", content: "Classified information about advanced surveillance technology development. Budget allocation: $50M. Timeline: Q2 2024 - Q4 2025." },
    { id: 2, title: "OPERATION BLACKOUT", classification: "TOP SECRET", content: "Covert operation details redacted. Target location: Eastern Europe. Assets deployed: 12. Status: Active." },
    { id: 3, title: "AGENT ROSTER DELTA", classification: "SECRET", content: "Undercover agents list: Agent 47 (Moscow), Agent 99 (Beijing), Agent 23 (Tehran). Extraction protocols in place." },
    { id: 4, title: "WEAPONS PROGRAM ALPHA", classification: "TOP SECRET", content: "Development of next-generation tactical equipment. Testing phase complete. Production approved." },
];

const auditLogsData = [
    { id: 1, timestamp: "2024-01-15 16:45:32", user: "admin", action: "LOGIN", status: "success", ip: "192.168.1.100" },
    { id: 2, timestamp: "2024-01-15 16:42:18", user: "agent_nighthawk", action: "FILE_ACCESS", status: "success", ip: "10.0.0.45" },
    { id: 3, timestamp: "2024-01-15 16:38:55", user: "unknown", action: "LOGIN_ATTEMPT", status: "failed", ip: "203.45.67.89" },
    { id: 4, timestamp: "2024-01-15 16:35:22", user: "agent_phantom", action: "DATABASE_QUERY", status: "success", ip: "10.0.0.52" },
    { id: 5, timestamp: "2024-01-15 16:30:10", user: "system", action: "BACKUP", status: "success", ip: "127.0.0.1" },
    { id: 6, timestamp: "2024-01-15 16:25:44", user: "unknown", action: "ADMIN_ACCESS", status: "failed", ip: "185.234.72.11" },
    { id: 7, timestamp: "2024-01-15 16:20:33", user: "agent_viper", action: "REPORT_DOWNLOAD", status: "success", ip: "10.0.0.78" },
    { id: 8, timestamp: "2024-01-15 16:15:21", user: "external", action: "API_CALL", status: "blocked", ip: "45.67.89.123" },
];

const systemLogs = [
    { time: "16:45:32", level: "info", message: "System health check completed successfully" },
    { time: "16:42:18", level: "success", message: "Agent authentication verified - NIGHTHAWK" },
    { time: "16:38:55", level: "warning", message: "Failed login attempt from external IP" },
    { time: "16:35:22", level: "info", message: "Database query executed - Case files accessed" },
    { time: "16:30:10", level: "success", message: "Automated backup completed" },
    { time: "16:25:44", level: "error", message: "Unauthorized admin access attempt blocked" },
    { time: "16:20:33", level: "info", message: "Report generated and downloaded" },
    { time: "16:15:21", level: "warning", message: "Suspicious API activity detected" },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
}

function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function updateClock() {
    const timeElement = document.getElementById('system-time');
    if (timeElement) {
        timeElement.textContent = `${getCurrentDate()} | ${getCurrentTime()}`;
    }
}

// Vulnerable function - XSS simulation (DO NOT use in production)
function renderHTMLUnsafe(html) {
    return html;
}

// Safe text rendering
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ============================================
// PAGE INITIALIZERS
// ============================================

function initDashboard() {
    // Update stats
    const activeAgents = agentsData.filter(a => a.status === 'active').length;
    const openCases = casesData.filter(c => c.status === 'active' || c.status === 'pending').length;
    const alerts = auditLogsData.filter(l => l.status === 'failed' || l.status === 'blocked').length;

    document.getElementById('stat-agents') && (document.getElementById('stat-agents').textContent = activeAgents);
    document.getElementById('stat-cases') && (document.getElementById('stat-cases').textContent = openCases);
    document.getElementById('stat-alerts') && (document.getElementById('stat-alerts').textContent = alerts);

    // Render system logs
    const logsContainer = document.getElementById('system-logs');
    if (logsContainer) {
        logsContainer.innerHTML = systemLogs.map(log => `
            <div class="log-entry">
                <span class="log-time">${log.time}</span>
                <span class="log-level ${log.level}">[${log.level.toUpperCase()}]</span>
                <span class="log-message">${escapeHtml(log.message)}</span>
            </div>
        `).join('');
    }
}

function initAgents() {
    const searchInput = document.getElementById('agent-search');
    const tableBody = document.getElementById('agents-table-body');

    function renderAgents(agents) {
        if (!tableBody) return;
        tableBody.innerHTML = agents.map(agent => `
            <tr onclick="viewAgentDetails(${agent.id})" style="cursor: pointer;">
                <td><span class="text-green">${escapeHtml(agent.codename)}</span></td>
                <td>${escapeHtml(agent.real_name)}</td>
                <td><span class="clearance-level">${escapeHtml(agent.clearance_level)}</span></td>
                <td><span class="status-badge status-${agent.status}">${agent.status}</span></td>
                <td>${escapeHtml(agent.location)}</td>
                <td><button class="btn btn-secondary" onclick="event.stopPropagation(); viewAgentDetails(${agent.id})">View</button></td>
            </tr>
        `).join('');
    }

    renderAgents(agentsData);

    // VULNERABLE SEARCH - XSS Simulation
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // VULNERABLE: Using innerHTML with user input (XSS vulnerability)
            const filtered = agentsData.filter(agent => 
                agent.codename.toLowerCase().includes(searchTerm) ||
                agent.real_name.toLowerCase().includes(searchTerm)
            );
            renderAgents(filtered);
            
            // Simulate vulnerable search result display
            const searchResults = document.getElementById('search-results');
            if (searchResults) {
                // This is intentionally vulnerable for educational purposes
                searchResults.innerHTML = `<span class="text-muted">Searching for: ${searchTerm}</span>`;
            }
        });
    }
}

function viewAgentDetails(agentId) {
    const agent = agentsData.find(a => a.id === agentId);
    if (!agent) return;

    const modalBody = document.getElementById('agent-modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div style="display: grid; gap: 16px;">
                <div>
                    <strong class="text-green">CODENAME:</strong>
                    <span>${escapeHtml(agent.codename)}</span>
                </div>
                <div>
                    <strong class="text-green">REAL NAME:</strong>
                    <span>${escapeHtml(agent.real_name)}</span>
                </div>
                <div>
                    <strong class="text-green">CLEARANCE:</strong>
                    <span class="clearance-level">${escapeHtml(agent.clearance_level)}</span>
                </div>
                <div>
                    <strong class="text-green">STATUS:</strong>
                    <span class="status-badge status-${agent.status}">${agent.status}</span>
                </div>
                <div>
                    <strong class="text-green">LOCATION:</strong>
                    <span>${escapeHtml(agent.location)}</span>
                </div>
                <div>
                    <strong class="text-green">LAST CONTACT:</strong>
                    <span>${escapeHtml(agent.last_contact)}</span>
                </div>
            </div>
        `;
    }
    openModal('agent-modal');
}

function initCases() {
    // Parse URL parameters for IDOR simulation
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('id');

    const tableBody = document.getElementById('cases-table-body');
    const detailsPanel = document.getElementById('case-details-panel');

    function renderCases() {
        if (!tableBody) return;
        tableBody.innerHTML = casesData.map(caseItem => `
            <tr onclick="viewCaseDetails(${caseItem.id})" style="cursor: pointer;">
                <td><span class="text-green">#${caseItem.id}</span></td>
                <td>${escapeHtml(caseItem.title)}</td>
                <td><span class="status-badge status-${caseItem.status}">${caseItem.status}</span></td>
                <td><span class="text-${caseItem.priority === 'CRITICAL' ? 'red' : caseItem.priority === 'HIGH' ? 'amber' : 'blue'}">${caseItem.priority}</span></td>
                <td>${escapeHtml(caseItem.assigned)}</td>
                <td>${caseItem.created}</td>
            </tr>
        `).join('');
    }

    renderCases();

    // If case ID in URL, show details (IDOR simulation)
    if (caseId) {
        viewCaseDetails(parseInt(caseId));
    }
}

function viewCaseDetails(caseId) {
    const caseItem = casesData.find(c => c.id === caseId);
    if (!caseItem) return;

    const detailsPanel = document.getElementById('case-details-panel');
    if (detailsPanel) {
        detailsPanel.classList.remove('hidden');
        detailsPanel.innerHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Case #${caseItem.id}: ${escapeHtml(caseItem.title)}</h3>
                <button class="modal-close" onclick="closeCaseDetails()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="display: grid; gap: 16px;">
                    <div>
                        <strong class="text-green">STATUS:</strong>
                        <span class="status-badge status-${caseItem.status}">${caseItem.status}</span>
                    </div>
                    <div>
                        <strong class="text-green">PRIORITY:</strong>
                        <span class="text-${caseItem.priority === 'CRITICAL' ? 'red' : caseItem.priority === 'HIGH' ? 'amber' : 'blue'}">${caseItem.priority}</span>
                    </div>
                    <div>
                        <strong class="text-green">ASSIGNED TO:</strong>
                        <span>${escapeHtml(caseItem.assigned)}</span>
                    </div>
                    <div>
                        <strong class="text-green">CREATED:</strong>
                        <span>${caseItem.created}</span>
                    </div>
                    <div>
                        <strong class="text-green">DESCRIPTION:</strong>
                        <p class="mt-1" style="color: var(--text-secondary); line-height: 1.6;">${escapeHtml(caseItem.description)}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeCaseDetails()">Close</button>
                <button class="btn btn-primary">Update Case</button>
            </div>
        `;
    }

    // Update URL without reload (IDOR simulation)
    history.pushState({}, '', `?id=${caseId}`);
}

function closeCaseDetails() {
    const detailsPanel = document.getElementById('case-details-panel');
    if (detailsPanel) {
        detailsPanel.classList.add('hidden');
    }
    history.pushState({}, '', window.location.pathname);
}

function initCommunications() {
    const messagesContainer = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-message');

    function renderMessages() {
        if (!messagesContainer) return;
        messagesContainer.innerHTML = communicationsData.map(msg => `
            <div class="chat-message">
                <div class="chat-avatar">${msg.avatar}</div>
                <div class="chat-message-content">
                    <div class="chat-sender">${escapeHtml(msg.sender)} • ${msg.time}</div>
                    <div class="chat-text">${escapeHtml(msg.message)}</div>
                </div>
            </div>
        `).join('');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    renderMessages();

    function sendMessage() {
        const input = chatInput;
        if (!input || !input.value.trim()) return;

        const message = input.value;
        
        // VULNERABLE: Using innerHTML with user input (XSS simulation)
        const newMessage = {
            id: communicationsData.length + 1,
            sender: "YOU",
            avatar: "YO",
            time: getCurrentTime().split(' ')[0],
            message: message // Stored without sanitization for XSS demo
        };
        
        communicationsData.push(newMessage);
        
        // Re-render with potentially unsafe content
        if (messagesContainer) {
            // Intentionally vulnerable rendering
            messagesContainer.innerHTML += `
                <div class="chat-message">
                    <div class="chat-avatar">YO</div>
                    <div class="chat-message-content">
                        <div class="chat-sender">YOU • ${newMessage.time}</div>
                        <div class="chat-text">${message}</div>
                    </div>
                </div>
            `;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        input.value = '';
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function initSecrets() {
    const secretsContainer = document.getElementById('secrets-container');
    
    if (secretsContainer) {
        secretsContainer.innerHTML = secretsData.map(secret => `
            <div class="secret-item" id="secret-${secret.id}">
                <div class="secret-header">
                    <span class="secret-title">${escapeHtml(secret.title)}</span>
                    <span class="secret-classification">${escapeHtml(secret.classification)}</span>
                </div>
                <div class="secret-content" id="content-${secret.id}">
                    ${escapeHtml(secret.content)}
                </div>
                <button class="btn btn-secondary secret-toggle mt-2" onclick="toggleSecret(${secret.id})">
                    🔓 Decrypt Content
                </button>
            </div>
        `).join('');
    }
}

function toggleSecret(secretId) {
    const content = document.getElementById(`content-${secretId}`);
    const button = content.nextElementSibling;
    
    if (content && button) {
        // Simulate fake clearance check (client-side only - insecure)
        const userClearance = "TOP SECRET"; // Hardcoded for demo
        
        if (userClearance === "TOP SECRET") {
            content.classList.add('revealed');
            button.textContent = '🔒 Encrypt Content';
            button.classList.remove('btn-secondary');
            button.classList.add('btn-primary');
        } else {
            alert('ACCESS DENIED: Insufficient clearance level');
        }
    }
}

function initReports() {
    const tableBody = document.getElementById('reports-table-body');
    const filterToggle = document.getElementById('filter-reviewed');

    function renderReports(showReviewed = true) {
        if (!tableBody) return;
        
        const filtered = showReviewed 
            ? reportsData 
            : reportsData.filter(r => !r.reviewed);
        
        tableBody.innerHTML = filtered.map(report => `
            <tr>
                <td><span class="text-green">#${report.id}</span></td>
                <td>${escapeHtml(report.title)}</td>
                <td>${report.date}</td>
                <td>${escapeHtml(report.author)}</td>
                <td><span class="status-badge ${report.reviewed ? 'status-active' : 'status-pending'}">${report.reviewed ? 'Reviewed' : 'Pending'}</span></td>
                <td>
                    <button class="btn btn-secondary" onclick="viewReport(${report.id})">View</button>
                    <button class="btn btn-primary" onclick="toggleReview(${report.id})">${report.reviewed ? 'Unmark' : 'Mark'}</button>
                </td>
            </tr>
        `).join('');
    }

    renderReports();

    if (filterToggle) {
        filterToggle.addEventListener('change', (e) => {
            renderReports(e.target.checked);
        });
    }
}

function viewReport(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if (!report) return;

    const modalBody = document.getElementById('report-modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div style="display: grid; gap: 16px;">
                <div>
                    <strong class="text-green">TITLE:</strong>
                    <span>${escapeHtml(report.title)}</span>
                </div>
                <div>
                    <strong class="text-green">DATE:</strong>
                    <span>${report.date}</span>
                </div>
                <div>
                    <strong class="text-green">AUTHOR:</strong>
                    <span>${escapeHtml(report.author)}</span>
                </div>
                <div>
                    <strong class="text-green">STATUS:</strong>
                    <span class="status-badge ${report.reviewed ? 'status-active' : 'status-pending'}">${report.reviewed ? 'Reviewed' : 'Pending'}</span>
                </div>
                <div>
                    <strong class="text-green">SUMMARY:</strong>
                    <p class="mt-1" style="color: var(--text-secondary); line-height: 1.6;">${escapeHtml(report.summary)}</p>
                </div>
            </div>
        `;
    }
    openModal('report-modal');
}

function toggleReview(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if (report) {
        report.reviewed = !report.reviewed;
        const filterToggle = document.getElementById('filter-reviewed');
        renderReports(filterToggle ? filterToggle.checked : true);
    }
}

function initAudit() {
    const tableBody = document.getElementById('audit-table-body');

    if (tableBody) {
        tableBody.innerHTML = auditLogsData.map(log => `
            <tr class="${log.status === 'failed' || log.status === 'blocked' ? 'text-red' : ''}">
                <td><span class="text-muted">${escapeHtml(log.timestamp)}</span></td>
                <td>${escapeHtml(log.user)}</td>
                <td>${escapeHtml(log.action)}</td>
                <td><span class="status-badge status-${log.status === 'success' ? 'active' : 'inactive'}">${log.status}</span></td>
                <td><span class="text-mono">${log.ip}</span></td>
            </tr>
        `).join('');
    }
}

// ============================================
// NAVIGATION
// ============================================

function setActiveNavItem(pageName) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href')?.includes(pageName)) {
            item.classList.add('active');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Update clock
    updateClock();
    setInterval(updateClock, 1000);

    // Detect current page and initialize
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
        setActiveNavItem('index');
        initDashboard();
    } else if (path.includes('agents.html')) {
        setActiveNavItem('agents');
        initAgents();
    } else if (path.includes('cases.html')) {
        setActiveNavItem('cases');
        initCases();
    } else if (path.includes('communications.html')) {
        setActiveNavItem('communications');
        initCommunications();
    } else if (path.includes('secrets.html')) {
        setActiveNavItem('secrets');
        initSecrets();
    } else if (path.includes('reports.html')) {
        setActiveNavItem('reports');
        initReports();
    } else if (path.includes('audit.html')) {
        setActiveNavItem('audit');
        initAudit();
    }

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
            closeCaseDetails();
        }
    });

    console.log('%c CLASSIFIED SYSTEM ', 'background: #00ff88; color: #0b0f14; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Authorized personnel only. All activities are monitored. ', 'color: #ffb347; font-size: 12px;');
});
