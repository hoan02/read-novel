"use client";

// Dữ liệu giả danh sách thành viên
const membersData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "Admin",
  },
  { id: 2, name: "Trần Thị B", email: "tranthib@example.com", role: "Member" },
  { id: 3, name: "Phạm Văn C", email: "phamvanc@example.com", role: "Member" },
  {
    id: 4,
    name: "Hoàng Thị D",
    email: "hoangthid@example.com",
    role: "Member",
  },
];

const ListMembers = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Danh sách thành viên</h2>
      {/* Mapping dữ liệu thành viên */}
      <ul>
        {membersData.map((member) => (
          <li key={member.id} className="mb-2">
            <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.email}</p>
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                {member.role}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMembers;
