import { MEMBERS, ROOMS } from "../../data/index.js";
import { storage } from "./storage.js";

const SELECTED_KEY = "selectedMember";

export function getSelectedMemberId() {
  return storage.get(SELECTED_KEY, "");
}

export function setSelectedMemberId(id) {
  if (!MEMBERS.some((member) => member.id === id)) return false;
  storage.set(SELECTED_KEY, id);
  window.dispatchEvent(new CustomEvent("app:memberchange", { detail: id }));
  return true;
}

export function getSelectedMember() {
  const id = getSelectedMemberId();
  return MEMBERS.find((member) => member.id === id) ?? null;
}

export function getMemberById(id) {
  return MEMBERS.find((member) => member.id === id) ?? null;
}

export function getRoomById(id) {
  return ROOMS.find((room) => room.id === id) ?? null;
}

export function getRoommates(member, hotelId) {
  const roomId = member?.roomAssignments?.[hotelId];
  const room = getRoomById(roomId);
  if (!room) return [];
  return room.memberIds
    .filter((id) => id !== member.id)
    .map(getMemberById)
    .filter(Boolean);
}

export function searchMembers(query) {
  const keyword = String(query ?? "").trim().toLocaleLowerCase();
  if (!keyword) return MEMBERS;

  return MEMBERS.filter((member) => {
    const roomCodes = Object.values(member.roomAssignments ?? {})
      .map((roomId) => getRoomById(roomId)?.assignmentCode ?? "")
      .join(" ");

    return [
      member.nameZh,
      member.nameEn,
      member.seatOutbound,
      member.seatReturn,
      roomCodes
    ].join(" ").toLocaleLowerCase().includes(keyword);
  });
}
