"use client"

import { useState, useEffect } from "react"
import { Search, FileText } from 'lucide-react'
import Navbar from "../components/Navbar"

export default function NotesPage() {
  return (
    <div>
        <Navbar />
    
    <div className="max-w-7xl mx-auto px-4 py-8">
        
      <h1 className="text-4xl font-bold mb-2 text-primary">Notes and Question Papers</h1>
      <p className="text-muted-foreground mb-8">Access and download study materials for all semesters</p>
      
      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            placeholder="Search notes..."
            className="pl-10 border border-gray-300 rounded p-2"
            disabled
          />
        </div>
        <div className="w-full sm:w-64">
          <select 
            disabled
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>All Categories</option>
          </select>
        </div>
      </div>
      
      {/* Coming Soon Message */}
      <div className="text-center py-12">
        <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium mb-2">Notes Feature Coming Soon!</h3>
        <p className="text-muted-foreground">
          Stay tuned for updates. The feature to view and download notes will be available shortly.
        </p>
      </div>
    </div>
    </div>
  )
}
