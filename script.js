document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    const teamMembersDiv = document.createElement('div');
    teamMembersDiv.id = 'teamMembers';
    document.querySelector('main').appendChild(teamMembersDiv);
  
    const team = ["Kieu Tan Phuoc", "Huynh Phuoc Tho", "To Doan Nguyet Thuy"]; // Thay thế bằng tên thành viên nhóm của bạn
  
    actionButton.addEventListener('click', function() {
      teamMembersDiv.textContent = "Thành viên nhóm: " + team.join(", ");
    });
  });