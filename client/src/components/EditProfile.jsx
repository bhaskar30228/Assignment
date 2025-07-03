import React from 'react'

const EditProfile = () => {
  return (
    <div>
    <h2 style={{ fontFamily: 'Georgia, serif', marginBottom: '20px' }}>User Profile</h2>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000, background: '#fff' }}>
        <div style={{ display: 'flex' }}>
            <button
                style={{
                    background: '#4dd0cf',
                    color: '#222',
                    border: 'none',
                    borderRadius: '3px 3px 0 0',
                    padding: '10px 30px',
                    fontSize: '18px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 400,
                    marginBottom: 0,
                    cursor: 'pointer',
                    outline: 'none',
                }}
            >
                Edit Account
            </button>
        </div>
        <form style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                    'Username',
                    'Current Password',
                    'New Password',
                    'Confirm Password',
                    'Email',
                    'Real Name',
                    'Access Level',
                    'Project Access Level',
                ].map((label, idx) => (
                    <div key={label} style={{ display: 'flex' }}>
                        <div
                            style={{
                                background: '#a3a1a1',
                                color: '#fff',
                                fontFamily: 'Georgia, serif',
                                fontSize: '18px',
                                padding: '10px 10px',
                                width: '33%',
                                border: '1px solid #fff',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {label}
                        </div>
                        <input
                            type={label.toLowerCase().includes('password') ? 'password' : 'text'}
                            style={{
                                width: '67%',
                                padding: '10px',
                                fontSize: '16px',
                                border: 'none',
                                borderBottom: '1px solid #ccc',
                                background: '#f7f7f7',
                                outline: 'none',
                            }}
                            autoComplete="off"
                        />
                    </div>
                ))}
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '33%', background: '#bdbdbd', padding: '16px 0' }}>
                        <button
                            type="submit"
                            style={{
                                background: '#4dd0cf',
                                color: '#222',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '10px 30px',
                                fontSize: '16px',
                                fontFamily: 'Georgia, serif',
                                cursor: 'pointer',
                                marginLeft: '16px',
                            }}
                        >
                            Update User
                        </button>
                    </div>
                    <div style={{ width: '67%', background: '#ccc' }} />
                </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditProfile
