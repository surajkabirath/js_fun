document.getElementById('kycForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const fullName = formData.get('fullName');
    const dob = formData.get('dob');
    const address = formData.get('address');
    const idType = formData.get('idType');
    console.log(fullName)
    console.log(address)
    console.log(idType)
    
    // Save user data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('dob', dob);
    localStorage.setItem('address', address);
    localStorage.setItem('idType', idType);
    localStorage.setItem('kycStatus', 'Pending');
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear the form
    this.reset();
    
    // Simulate KYC approval process
    setTimeout(() => {
        const isApproved = Math.random() > 0.2; // 80% chance of approval for simulation
        if (isApproved) {
            localStorage.setItem('kycStatus', 'Approved');
            window.location.href = 'profile.html';
        } else {
            localStorage.setItem('kycStatus', 'Rejected');
            window.location.href = 'profile.html';
        }
    }, 3000); // Simulated delay of 3 seconds
});

document.getElementById('idType').addEventListener('change', function() {
    const idType = this.value;
    const idBackGroup = document.getElementById('idBackGroup');
    
    if (idType === 'passport') {
        idBackGroup.style.display = 'none';
        document.getElementById('idBack').removeAttribute('required');
    } else {
        idBackGroup.style.display = 'block';
        document.getElementById('idBack').setAttribute('required', 'required');
    }
});
