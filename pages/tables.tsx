/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tables = () => {
  const [tablesList, setTablesList] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('https://nucleux-puce.vercel.app/api/layerf/');
        const data = response.data;

        const extractedTables = [];
        data[6]?.layer_f_note.chunks?.forEach((chunk) => {
          chunk.sections?.forEach((section) => {
            if (section.tables) {
              extractedTables.push(...section.tables);
            }
          });
        });

        setTablesList(extractedTables);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  return (
    <Stack sx={{ bgcolor: 'white', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Dynamic Tables
      </Typography>
      <Paper elevation={3} sx={{  }}>
        <Table stickyHeader>
          <TableHead>
            {tablesList.length > 0 && (
              <TableRow>
                {tablesList[0]?.headers?.map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {tablesList.map((table, tableIndex) =>
              table.rows?.map((row, rowIndex) => (
                <TableRow hover key={`${tableIndex}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={`${tableIndex}-${rowIndex}-${cellIndex}`}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </Stack>
  );
};

export default Tables;
