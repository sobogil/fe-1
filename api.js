// 저장하기
export async function saveEntriesToServer(yearMonth, entry) {
  await fetch(`http://localhost:3000/api/entry/${yearMonth}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
}

// 불러오기
export async function loadEntriesFromServer(yearMonth) {
  const res = await fetch(`http://localhost:3000/api/entry/${yearMonth}`);
  if (res.status !== 200) {
    return [];
  }
  const data = await res.json();
  return data;
}

// 더미 데이터 삭제
export async function deleteEntryToServer(yearMonth, id) {
  await fetch(`http://localhost:3000/api/entry/${yearMonth}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export async function updateDataToServer(yearMonth, entry) {
  await fetch(`http://localhost:3000/api/entry/${yearMonth}/${entry.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
}
