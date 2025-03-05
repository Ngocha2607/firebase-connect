"use client";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/firebase.config";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Homepage = () => {
  const { user } = useAuth();
  const navigate = useRouter();
  if (!user) navigate.replace("/login");

  const [users, setUsers] = useState<DocumentData[]>([]);

  const handleAddNewUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Test",
        last: "Lovelace",
        born: "20-12-1815",
        email: "dollar.singh@example.com",
      });
      console.log("Document written with ID: ", docRef.id);
      fetchListUsers();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchListUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    const users = querySnapshot.docs.map((doc) => doc.data());

    setUsers(users);

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    fetchListUsers();
  }, []);

  return (
    <MainLayout>
      <div className="mb-20">
        <Button onClick={handleAddNewUser}>Add New User</Button>
      </div>
      <div>
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Dob</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell key={user.id}>
                  {user.first} {user.last}
                </TableCell>
                <TableCell>{user.born}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
};

export default Homepage;
